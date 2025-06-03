import { v4 as uuidv4 } from "uuid";

const sendConfirmationEmail = async ({
  e,
  formData,
  setMessage,
  setFormData,
  router,
}) => {
  e.preventDefault();

  if (!formData.name) {
    setMessage({ text: "Bitte gib deinen Namen ein.", type: "error" });
    return;
  }
  if (!formData.comment || formData.comment.length < 10) {
    setMessage({
      text: "Der Kommentar muss mindestens 10 Zeichen lang sein.",
      type: "error",
    });
    return;
  }
  if (formData.rating === 0) {
    setMessage({ text: "Bitte gib eine Bewertung ab.", type: "error" });
    return;
  }
  if (!formData.email) {
    setMessage({
      text: "Bitte gib deine E-Mail-Adresse ein.",
      type: "error",
    });
    return;
  }

  const token = uuidv4();

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        token,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage({
        text: result.error || "Fehler beim Senden",
        type: "error",
      });
      return;
    }

    setFormData({ name: "", email: "", rating: 0, comment: "" });
    router.push("/thank-you");
  } catch (err) {
    console.error("Fehler:", err);
    setMessage({
      text: "Feedback gespeichert, aber Bestätigungsmail konnte nicht gesendet werden.",
      type: "error",
    });
  }
};

export default sendConfirmationEmail;
