import React from "react";

const Impressum = () => (
  <>
    <h2>Impressum</h2>

    <section>
      <p className="font-semibold">Großtagespflege „Die Weltentdecker“</p>
      <p>Kimberley Engelhardt</p>
      <p>Pontivystraße 17</p>
      <p>50389 Wesseling</p>
      <p>Deutschland</p>
    </section>

    <section>
      <h3>Kontakt</h3>
      <p>Telefon: 01573 8005965</p>
      <p>
        Instagram:{" "}
        <a
          href="https://www.instagram.com/tagespflegedieweltentdecker"
          target="_blank"
          rel="noopener noreferrer"
        >
          @tagespflegedieweltentdecker
        </a>
      </p>
    </section>

    <section>
      <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
      <p>Kimberley Engelhardt</p>
      <p>Pontivystraße 17, 50389 Wesseling</p>
    </section>

    <section>
      <h3>Aufsichtsbehörde</h3>
      <p>Jugendamt der Stadt Wesseling</p>
    </section>

    <section>
      <h3>Öffnungszeiten</h3>
      <p>Montag – Freitag: 07:00 – 15:00 Uhr</p>
    </section>

    <section>
      <h3>Standort</h3>
      <div className="rounded-lg overflow-hidden shadow-lg border border-rose-200">
        <iframe
          title="Die Weltentdecker Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.9352926477176!2d6.978631176742007!3d50.82512767167801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2100193981ad%3A0x5512a22ebcd50558!2sKindertagespflege%3A%20Die%20Weltentdecker!5e0!3m2!1sde!2sde!4v1716901320784!5m2!1sde!2sde"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  </>
);

export default Impressum;
