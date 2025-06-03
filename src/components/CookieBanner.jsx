"use client";
import React, { useState, useEffect } from "react";
import DatenschutzPreview from "./DatenschutzPreview";

const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAccept = () => {
    document.cookie = "userConsent=true; path=/";
    setShowBanner(false);
    setShowModal(false);
  };

  const handleDecline = () => {
    document.cookie = "userConsent=false; path=/";
    setShowBanner(false);
    setShowModal(false);
  };

  useEffect(() => {
    const cookies = document.cookie.split("; ").reduce((acc, current) => {
      const [name, value] = current.split("=");
      acc[name] = value;
      return acc;
    }, {});

    if (cookies.userConsent === "true" || cookies.userConsent === "false") {
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-amber-300 border border-gray-300 shadow-lg text-gray-800 px-6 py-4 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl w-full">
            <p className="text-sm text-center max-w-xl">
              This website uses cookies to improve your experience. Read our{" "}
              <button
                onClick={() => setShowModal(true)}
                className="text-rose-600 hover:underline font-medium"
              >
                privacy policy
              </button>
              .
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDecline}
                className="bg-gray-300 text-gray-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="bg-rose-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-rose-700 transition"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-accent max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 rounded-lg shadow-lg relative text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
              aria-label="Close"
            >
              &times;
            </button>
            <DatenschutzPreview />
            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={handleDecline}
                className="bg-gray-300 text-gray-700 font-semibold px-5 py-2 rounded-lg hover:bg-gray-400 transition"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="bg-rose-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-rose-700 transition"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsentBanner;
