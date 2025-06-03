"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ThankYou = () => {
  const [counter, setCounter] = useState(15);
  const router = useRouter();

  useEffect(() => {
    if (counter === 0) {
      router.push("/");
      return;
    }
    const timer = setTimeout(() => setCounter(counter - 1), 1000);
    return () => clearTimeout(timer);
  }, [counter, router]);

  return (
    <>
      <div className="text-center space-y-4">
        <div>{counter}</div>
        <p>
          Vielen Dank für dein Feedback! Wir haben dir eine E-Mail mit einem
          Bestätigungslink geschickt.
          <br />
          Bitte bestätige deine E-Mail-Adresse, damit dein Feedback auf meiner
          Startseite sichtbar wird.
          <br />
          Überprüfe auch deinen Spam- oder Junk-Ordner.
        </p>
        <Link href="/" className="text-rose-600 underline">
          Hier klicken, um zur Startseite zurückzukehren
        </Link>
      </div>
    </>
  );
};

export default ThankYou;
