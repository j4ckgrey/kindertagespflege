import React from "react";

import TimeTableSection from "@/components/TimeTableSection";
import DaycarerSection from "@/components/DaycarerSection";
import GallerySection from "@/components/GallerySection";
import Feedbacks from "@/components/Feedbacks";
import { FeedbackProvider } from "@/components/FeedbackContext";

const Home = () => {
  return (
    <div>
      <h1 className="text-center">Willkommen</h1>
      <div className="bg-sky-100 py-3 px-6 text-center flex flex-col justify-center">
        <h3>Kleine Füße – große Abenteuer</h3>
        <p>
          In unserer Kindertagespflege Die Weltentdecker steht jedes Kind im
          Mittelpunkt. Mit Herz, Nähe und viel Erfahrung begleiten wir die
          Kleinen auf ihren ersten Wegen durch eine spannende Welt.
        </p>
        <p>
          Wir bieten eine liebevolle, familiäre Umgebung, in der Kinder sich
          geborgen fühlen und in ihrem eigenen Tempo wachsen dürfen. Ob beim
          Spielen, Basteln oder draußen in der Natur – wir schaffen Raum für
          Neugier, Kreativität und echte Kindheit.
        </p>
        <p>
          Unser Motto „Kleine Füße – große Abenteuer“ ist bei uns gelebter
          Alltag: Jeder Tag bringt neue Entdeckungen, kleine Wunder und große
          Entwicklungsschritte. Dabei sind uns Vertrauen, feste Rituale und ein
          achtsamer Umgang miteinander besonders wichtig.
        </p>
        <p>
          Die Weltentdecker sind mehr als nur Betreuung – wir sind ein Ort zum
          Wohlfühlen, Mitmachen und Wachsen.
        </p>
      </div>

      <TimeTableSection className="pt-6" />

      <DaycarerSection className="pt-6" />

      <GallerySection className="pt-6" />

      <FeedbackProvider>
        <Feedbacks />
      </FeedbackProvider>
    </div>
  );
};

export default Home;
