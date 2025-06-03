"use client";
import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import ResetConsentButton from "./ResetConsentButton";
import { CookiesProvider } from "react-cookie";

const Footer = () => (
  <footer className="bg-amber-200 shadow-inner z-40 mt-5">
    <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-neutral-900">
      <div className="mb-4 md:mb-0 space-x-6 text-base font-semibold leading-relaxed">
        <Link
          href="/impressum"
          className="hover:underline text-rose-700 font-semibold"
        >
          Impressum
        </Link>
        <Link
          href="/datenschutzerklarung"
          className="hover:underline text-rose-700 font-semibold"
        >
          Datenschutz
        </Link>
        <Link
          href="/agb"
          className="hover:underline text-rose-700 font-semibold"
        >
          AGB
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://www.instagram.com/tagespflegedieweltentdecker"
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-700 hover:text-rose-500 transition-colors duration-200 text-3xl"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <span className="text-sm text-neutral-700">
          &copy; {new Date().getFullYear()} Die Weltentdecker
        </span>
        <CookiesProvider>
          <ResetConsentButton />
        </CookiesProvider>
      </div>
    </div>
  </footer>
);

export default Footer;
