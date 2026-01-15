"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      setSuccess(true);
      form.reset();
    } else {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  }

  return (
    <main className="flex flex-col">
      {/* HEADER / IMAGE */}
      <section className="w-full bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-6 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
            Contact Us
          </h1>
          <p className="mt-2 text-slate-600">
            We’d love to hear from you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <Image
              src="/contact.png"
              alt="Contact In His Steps Academy"
              width={1600}
              height={900}
              className="w-full h-auto rounded-md"
              priority
            />

            <p className="mt-6 text-center text-slate-600 max-w-2xl mx-auto">
              Have questions or want to schedule a tour? You can reach us using
              the information above — or simply fill out the form below and our
              team will be in touch.
            </p>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="max-w-xl mx-auto px-6 py-20 w-full">
        <div className="rounded-xl bg-rose-50 p-8 shadow-sm space-y-6">
          <h2 className="text-2xl font-semibold text-slate-800">
            Schedule a Tour
          </h2>

          <p className="text-slate-600">
            Complete the form below and our office will contact you shortly.
          </p>

          {success && (
            <p className="rounded-md bg-green-50 p-4 text-green-700">
              Thanks! We’ll be in touch shortly.
            </p>
          )}

          {error && (
            <p className="rounded-md bg-red-50 p-4 text-red-700">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              required
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-rose-200"
            />

            <textarea
              name="message"
              required
              placeholder="Tell us about your child"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-rose-200"
              rows={4}
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-md bg-rose-600 px-6 py-3 font-medium text-white hover:bg-rose-700 transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
