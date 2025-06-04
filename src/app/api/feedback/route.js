import { FeedbackConfirmationEmailHtml } from "@/app/lib/emailTemplates";
import { supabase } from "@/app/lib/supabaseClient.js";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, comment, rating, token } = await req.json();

    const { data: existingFeedback, error: selectError } = await supabase
      .from("feedback")
      .select("id")
      .eq("email", email)
      .limit(1);

    if (selectError) {
      return new Response(
        JSON.stringify({ error: "Fehler beim Überprüfen der E-Mail." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    if (existingFeedback.length > 0) {
      return new Response(
        JSON.stringify({
          error: "Für diese E-Mail wurde bereits Feedback abgegeben.",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { error } = await supabase
      .from("feedback")
      .insert([{ name, email, comment, rating, confirmed: false, token }]);

    if (error) {
      return new Response(
        JSON.stringify({ error: "Fehler beim Speichern des Feedbacks." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const host = process.env.NEXT_PUBLIC_SITE_URL;
    const confirmUrl = `${protocol}://${host}/confirm?token=${token}`;

    const html = FeedbackConfirmationEmailHtml(confirmUrl);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Feedback-Bestätigung" <feedback@kindertagespflege.dieweltentdecker.de>`,
      to: email,
      subject: "Bitte bestätige dein Feedback",
      html,
    });

    return new Response(
      JSON.stringify({
        message: "Feedback gespeichert! Bitte bestätige deine E-Mail.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error:", err);
    return new Response(
      JSON.stringify({ error: "Fehler beim Senden der Bestätigungsmail." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
