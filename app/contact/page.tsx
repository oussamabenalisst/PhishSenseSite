"use client";
import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, message });
    setSubmitted(true);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 animate-fade-in bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-2xl mx-auto bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-600">
        <div className="px-8 py-12">
          <h2 className="text-4xl font-bold text-center text-green-400 mb-12">
            Contact Us
          </h2>

          {submitted ? (
            <div className="text-center p-6 mb-6 text-green-400 bg-green-900/50 rounded-xl border border-green-500 text-lg">
              Thank you for your message! We will get back to you soon.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-300 mb-3"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-6 py-4 text-lg bg-gray-900/50 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                          transition-all duration-300 hover:border-green-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-300 mb-3"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="block w-full px-6 py-4 text-lg bg-gray-900/50 border border-gray-600 rounded-xl text-gray-100 placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                          transition-all duration-300 hover:border-green-400 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 text-lg font-semibold border border-transparent rounded-xl shadow-lg
                         text-gray-900 bg-green-400 hover:bg-green-500 
                         focus:outline-none focus:ring-4 focus:ring-green-500/50
                         transition-all duration-300 transform hover:scale-[1.02] hover:shadow-green-500/20"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
