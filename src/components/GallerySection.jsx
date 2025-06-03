"use client";
import React, { useState, useEffect } from "react";
import Photo1 from "../assets/photos/01.jpeg";
import Photo2 from "../assets/photos/02.jpeg";
import Photo3 from "../assets/photos/03.jpeg";
import Image from "next/image";

const GallerySection = () => {
  const images = [];
  images.push(Photo1, Photo2, Photo3);
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
    <section className="bg-sky-100 py-3 px-6 text-center flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-6">Einblick in unseren Alltag</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              fill
              src={img}
              alt={`Foto ${index + 1}`}
              className="object-cover transition-transform duration-300 hover:scale-105"
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
            className="absolute top-10 right-10 text-gray-300 text-3xl font-bold z-60 hover:text-white transition bg-transparent border-none focus:outline-none"
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
            className="absolute left-10 text-gray-300 text-4xl font-bold z-60 hover:text-white transition bg-transparent border-none focus:outline-none"
          >
            &#8592;
          </button>
          <div className="relative w-[90vw] h-[90vh] max-w-[90vw] max-h-[90vh]">
            <Image
              fill
              src={images[selectedIndex]}
              alt={`Vollbild ${selectedIndex + 1}`}
              className="object-contain rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev + 1) % images.length);
            }}
            className="absolute right-10 text-gray-300 text-4xl font-bold z-60 hover:text-white transition bg-transparent border-none focus:outline-none"
          >
            &#8594;
          </button>
        </div>
      )}
      <a
        href="/photos"
        className="text-rose-600 hover:underline font-medium text-lg"
      >
        → Klicke hier für unser Fotoalbum
      </a>
    </section>
  );
};

export default GallerySection;
