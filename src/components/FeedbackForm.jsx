"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import sendConfirmationEmail from "@/app/lib/sendConfirmationEmail";

const FeedbackForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 0,
    comment: "",
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => {
        setMessage(null);
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  const handleSubmit = (e) => {
    sendConfirmationEmail({
      e,
      formData,
      setMessage,
      setFormData,
      router,
    });
  };

  const renderStars = () =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        onClick={() => setFormData({ ...formData, rating: i + 1 })}
        className={`cursor-pointer text-2xl ${
          i + 1 <= formData.rating ? "text-yellow-500" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-6">
        <input
          type="text"
          placeholder="Dein Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-white border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
        />
        <input
          type="email"
          placeholder="Deine E-Mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-white border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
        />
        <textarea
          placeholder="Dein Kommentar"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
          className="bg-white border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          rows={3}
        />
        <div className="flex items-center gap-1">
          <span className="mr-2 font-semibold">Bewertung:</span>
          {renderStars()}
        </div>
        <button
          type="submit"
          className="bg-rose-500 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-pink-600 hover:shadow-lg transition"
        >
          Absenden
        </button>
      </form>

      {message && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div
            className={`p-4 rounded-lg shadow-xl max-w-sm text-center animate-fade-in ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-rose-100 text-rose-800"
            }`}
            role="alert"
          >
            {message.text}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;
