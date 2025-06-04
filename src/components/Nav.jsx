"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Über mich" },
    { href: "/contact", label: "Kontakt" },
    { href: "/photos", label: "Fotos" },
    { href: "/concept", label: "Konzept" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-10">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-rose-700 font-semibold hover:underline"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-rose-700 font-semibold"
      >
        ☰
      </button>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="absolute top-full right-4 mt-2 w-48 bg-white rounded shadow-md z-50 md:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block px-4 py-2 text-rose-700 hover:bg-amber-100"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Nav;
