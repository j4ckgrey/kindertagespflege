"use client";
import react from "react";
import Link from "next/link";
import { useFeedback } from "./FeedbackContext";

const Feedbacks = () => {
  const { feedbacks } = useFeedback();

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center mt-6">
        Was sagen andere?
      </h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-500">Noch kein Feedback vorhanden.</p>
      ) : (
        <div className="max-h-72 overflow-y-auto">
          {feedbacks.map((fb, idx) => (
            <div key={idx} className="border-b pb-3 mb-3">
              <div className="flex justify-between">
                <strong>{fb.name}</strong>
                <div className="text-yellow-500">
                  {"★".repeat(fb.rating) + "☆".repeat(5 - fb.rating)}
                </div>
              </div>
              <p>{fb.comment}</p>
            </div>
          ))}
        </div>
      )}

      <Link
        href="/leavefeedback"
        className="text-rose-600 hover:underline block mt-4"
      >
        → Hinterlasse dein eigenes Feedback
      </Link>
    </section>
  );
};

export default Feedbacks;
