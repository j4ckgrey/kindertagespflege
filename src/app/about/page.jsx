import React from "react";
import Photo1 from "../../assets/Kim.jpeg";
import Photo2 from "../../assets/Kim1.jpeg";
import Image from "next/image";

const About = () => (
  <>
    <h2>Das bin ich – Kim Engelhardt</h2>
    <div className="flex flex-col lg:flex-row items-start gap-8 mb-10">
      <div className="flex-1 space-y-5">
        <p>
          Ich heiße Kim Engelhardt, bin 33 Jahre alt, verheiratet und Mutter von
          zwei wundervollen kleinen Kindern – einem Sohn im Kindergartenalter
          und einer Tochter, die gerade die Welt zu entdecken beginnt. Meine
          Familie ist mein Anker und meine tägliche Inspiration – und
          gleichzeitig spiegelt sie vieles von dem wider, was mir auch in meiner
          Arbeit als Tagesmutter wichtig ist: Vertrauen, Geborgenheit,
          Ehrlichkeit und ein liebevoller Blick für die kleinen Dinge.
        </p>
        <p>
          Schon als Jugendliche war ich mit ganzem Herzen für Kinder da – sei es
          in der Nachbarschaft, in Familien oder später mit meinem
          Juleica-Schein als Betreuerin auf Kinder- und Jugendfreizeiten. Dass
          ich beruflich mit Kindern arbeiten möchte, war für mich nie eine Frage
          – sondern eine Herzensentscheidung.
        </p>
      </div>
      <div className="relative w-full sm:w-2/3 lg:w-1/3 aspect-[4/5] rounded-xl shadow-md overflow-hidden">
        <Image
          fill
          src={Photo1}
          alt="Kim Engelhardt"
          className="object-cover"
        />
      </div>
    </div>
    <div className="flex flex-col lg:flex-row items-center gap-8 mb-10">
      <div className="relative w-full sm:w-2/3 lg:w-1/3 aspect-[4/5] rounded-xl shadow-md overflow-hidden">
        <Image
          src={Photo2}
          alt="Großtagespflege Die Weltentdecker"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 space-y-5">
        <p>
          Ich bin aktuell im 8. Jahr meiner Tätigkeit als
          Kindertagespflegeperson – sieben Jahre lang war ich in einer
          Großtagespflege angestellt und konnte dort viele wertvolle Erfahrungen
          sammeln. Seit einem Jahr bin ich nun selbstständig und leite gemeinsam
          mit meinem Kollegen Andy unsere eigene Großtagespflege „Die
          Weltentdecker“ in Wesseling – einen Ort, an dem Kinder mit Neugier
          lernen, mit Freude spielen und mit Vertrauen wachsen dürfen.
        </p>

        <p>
          Ich habe mich ganz bewusst für die Kindertagespflege entschieden, weil
          ich die intensive Begleitung in kleinen Gruppen schätze. Hier kann ich
          wirklich für jedes Kind da sein – es sehen, hören, trösten, stärken
          und feiern. Kein Tag gleicht dem anderen, und doch gibt uns ein
          liebevoll gestalteter Alltag mit festen Strukturen, Naturerfahrungen
          und gesunder Ernährung den Rahmen, in dem sich die Kinder sicher und
          geborgen fühlen.
        </p>

        <p>
          Als Mutter weiß ich genau, wie schwer es sein kann, sein Kind in
          andere Hände zu geben. Deshalb ist mir die Zusammenarbeit mit den
          Eltern besonders wichtig – offen, ehrlich und wertschätzend. Ich
          wünsche mir, dass auch die Eltern sich bei uns wohlfühlen. Denn nur
          wenn das Vertrauen stimmt, kann ein Kind sich wirklich fallen lassen –
          und bei uns einfach Kind sein.
        </p>
      </div>
    </div>
  </>
);

export default About;
