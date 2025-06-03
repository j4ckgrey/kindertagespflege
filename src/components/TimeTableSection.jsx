import React from "react";
import Photo from "../assets/photos/05.jpeg";
import Image from "next/image";

const TimeTableSection = () => (
  <section className="flex flex-col md:flex-row items-center bg-gray-100 gap-8 py-3 px-6 my-5">
    <div className="w-full aspect-square md:aspect-auto md:w-1/3 md:h-[400px] relative">
      <Image
        fill
        src={Photo}
        alt="Tagesablauf"
        className="rounded-xl shadow-lg object-cover"
      />
    </div>
    <div className="w-full md:w-2/3">
      <h2 className="text-2xl font-bold mb-4">Unser Tagesablauf</h2>
      <p>
        🕖 <strong>07:00–08:50 Uhr –</strong> Bringzeit & freies Spiel
      </p>
      <p>
        🍎 <strong>09:00 Uhr –</strong> Gemeinsames Frühstück
      </p>
      <p>
        🎨 <strong>09:30 Uhr –</strong> Spaziergang zum Rhein oder Spielplatz
      </p>
      <p>
        🌳 <strong>Bei sehr schlechtem Wetter:</strong> kreative Aktivitäten,
        Bewegungs- oder Bastelangebote im Gruppenraum
      </p>
      <p>
        🍽️ <strong>10:45 Uhr –</strong> Vorbereitung auf die Mittagsruhe
      </p>
      <p>
        😴 <strong>11:00–13:30 Uhr –</strong> Mittagsschlaf & Ruhezeit
      </p>
      <p>
        👋 <strong>13:30–14:00 Uhr –</strong> Gemeinsames Mittagessen
      </p>
      <p>
        <strong>14:00–16:15 Uhr (Fr bis 15:00 Uhr) </strong> Freispiel,
        Abholzeit, ruhige Nachmittagsgestaltung
      </p>
    </div>
  </section>
);

export default TimeTableSection;
