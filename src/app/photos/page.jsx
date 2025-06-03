"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import img01 from "@/assets/photos/01.jpeg";
import img02 from "@/assets/photos/02.jpeg";
import img03 from "@/assets/photos/03.jpeg";
import img04 from "@/assets/photos/04.jpeg";
import img05 from "@/assets/photos/05.jpeg";
import img06 from "@/assets/photos/06.jpeg";
import img07 from "@/assets/photos/07.jpeg";
import img08 from "@/assets/photos/08.jpeg";
import img09 from "@/assets/photos/09.jpeg";
import img10 from "@/assets/photos/10.jpeg";
import img11 from "@/assets/photos/11.jpeg";
import img12 from "@/assets/photos/12.jpeg";
import img13 from "@/assets/photos/13.jpeg";

const images = [
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  img09,
  img10,
  img11,
  img12,
  img13,
];

const Photos = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleKeyDown = (e) => {
    if (selectedIndex !== null) {
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Unsere schönen Momente
      </h2>
      <p className="text-secondary text-center mb-10 max-w-2xl mx-auto">
        Hier finden Sie eine Auswahl besonderer Momente, die wir mit den Kindern
        erleben. Diese Bilder zeigen, wie bunt und kreativ unser Alltag ist.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              fill
              priority
              src={img}
              alt={`Foto ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute top-10 right-10 text-gray-300 text-3xl font-bold z-60
             hover:text-white hover:scale-125 hover:bg-white/10 
             hover:backdrop-blur-sm rounded-full p-2 transition-all duration-200 cursor-pointer"
          >
            &times;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(
                (prev) => (prev - 1 + images.length) % images.length
              );
            }}
            className="absolute left-10 text-gray-300 text-4xl font-bold z-60
             hover:text-white hover:scale-125 hover:bg-white/10 
             hover:backdrop-blur-sm rounded-full p-2 transition-all duration-200 cursor-pointer"
          >
            &#8592;
          </button>
          <div className="relative max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg">
            <Image
              src={images[selectedIndex]}
              alt={`Vollbild ${selectedIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-10 text-gray-300 text-4xl font-bold z-60
             hover:text-white hover:scale-125 hover:bg-white/10 
             hover:backdrop-blur-sm rounded-full p-2 transition-all duration-200 cursor-pointer"
          >
            &#8594;
          </button>
        </div>
      )}
    </>
  );
};

export default Photos;
