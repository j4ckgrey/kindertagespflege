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
  }, []);

  return (
    <>
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

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        ref={buttonRef}
        className="md:hidden text-rose-700 font-bold text-2xl"
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-4 mt-2 w-48 bg-amber-200 rounded shadow-md z-50 md:hidden border border-rose-300"
        >
          {navLinks.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              className={`block px-4 py-3 text-rose-700 font-semibold hover:bg-amber-100 ${
                i < navLinks.length - 1 ? "border-b border-rose-300" : ""
              }`}
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
