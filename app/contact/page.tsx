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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 animate-fade-in">
      <div className="max-w-md mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-700">
        <div className="px-6 py-8">
          <h2 className="text-2xl font-bold text-center text-green-400 mb-8">
            Contact Us
          </h2>

          {submitted ? (
            <div className="text-center p-4 mb-4 text-green-400 bg-green-900/50 rounded-lg border border-green-500">
              Thank you for your message! We will get back to you soon.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                          transition-all duration-200"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="block w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400
                          focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent
                          transition-all duration-200 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium
                         text-gray-900 bg-green-400 hover:bg-green-500 
                         focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 
                         transition-all duration-200 transform hover:scale-[1.02]"
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
