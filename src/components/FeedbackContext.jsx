"use client";
import React, { createContext, useState, useEffect, useContext } from "react";
import { supabase } from "../app/lib/supabaseClient.js";

const FeedbackContext = createContext();

export const useFeedback = () => useContext(FeedbackContext);

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    const { data, error } = await supabase
      .from("feedback")
      .select("*")
      .eq("confirmed", true)
      .order("created_at", { ascending: false });

    if (!error) {
      setFeedbacks(data);
    } else {
      console.error("Error fetching feedbacks:", error);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const addFeedback = (feedback) => {
    // Still push optimistically — but only confirmed ones will be re-fetched
    setFeedbacks((prev) => [feedback, ...prev]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
