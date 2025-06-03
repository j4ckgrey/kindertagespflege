import nodemailer from "nodemailer";

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "kinderpflege.dieweltentdecker@gmail.com",
      pass: "dirvngmgjlafevfo",
    },
  });

  try {
    await transporter.verify();
    console.log("SMTP verified");

    const info = await transporter.sendMail({
      from: '"Test" <kinderpflege.dieweltentdecker@gmail.com>',
      to: "j4ckgrey@gmail.com",
      subject: "Test Email",
      text: "Hello from test script",
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Test email error:", error);
  }
}

testEmail();
