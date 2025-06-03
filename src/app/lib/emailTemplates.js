export function FeedbackConfirmationEmailHtml(confirmUrl) {
  return `
    <div style="font-family: Arial, sans-serif; color: #1f2937; padding: 24px; text-align: center;">
      <img src="https://i.ibb.co/WNNFRCkK/Image.png" alt="Logo" style="width: 144px; display: block; margin: 0 auto 24px;" />
      <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 16px;">Bitte bestätige dein Feedback</h1>
      <p style="margin-bottom: 16px;">Danke für dein Feedback!</p>
      <p style="margin-bottom: 24px;">
        Bitte bestätige es mit einem Klick: 
        <a href="${confirmUrl}" style="color: #e11d48; text-decoration: underline;">Hier klicken</a>
      </p>
    </div>
  `;
}
