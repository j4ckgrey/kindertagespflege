"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "../lib/supabaseClient.js";

const ConfirmComponent = () => {
  const [status, setStatus] = useState("Bestätige dein Feedback...");
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    const confirm = async () => {
      const { error } = await supabase
        .from("feedback")
        .update({ confirmed: true })
        .eq("token", token);

      if (error) {
        setStatus("Bestätigung fehlgeschlagen.");
      } else {
        setStatus("Danke! Dein Feedback wurde bestätigt.");
      }
    };

    if (token) confirm();
  }, [token]);

  return (
    <div className="max-w-xl mx-auto mt-10 text-center">
      <p>{status}</p>
    </div>
  );
};

export default ConfirmComponent;
