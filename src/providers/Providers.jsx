"use client";

import { StrictMode } from "react";
import { CookiesProvider } from "react-cookie";
import { FeedbackProvider } from "../components/FeedbackContext";

const Providers = ({ children }) => {
  return (
    <StrictMode>
      <CookiesProvider>
        <FeedbackProvider>{children}</FeedbackProvider>
      </CookiesProvider>
    </StrictMode>
  );
};

export default Providers;
