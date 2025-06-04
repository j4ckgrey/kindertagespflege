"use client";
import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Danke, ${form.name}! Ihre Nachricht wurde gesendet.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <h2 className="text-3xl font-extrabold text-primary mb-6 text-center">
        Kontaktieren Sie uns
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className="block mb-1 text-secondary font-medium"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          />
        </div>
        <div>
          <label
            className="block mb-1 text-secondary font-medium"
            htmlFor="email"
          >
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          />
        </div>
        <div>
          <label
            className="bg-white border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
            htmlFor="message"
          >
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
            className="bg-white border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
          />
        </div>
        <button
          type="submit"
          className="bg-rose-500 text-white font-semibold py-3 px-6 rounded-md shadow-md hover:bg-pink-600 hover:shadow-lg transition"
        >
          Absenden
        </button>
      </form>
    </>
  );
};

export default Contact;
