import React from "react";
import { LiaWhatsapp, LiaInstagram, LiaTwitter, LiaFacebookF } from "react-icons/lia";

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-700 text-neutral-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold underline decoration-neutral-500 mb-6">
          Contact Us
        </h1>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
          We'd love to hear from you! Whether you have questions, suggestions, or just want to connect, feel free to reach out.
        </p>

        {/* Contact Info */}
        <div className="space-y-4 text-center">
          <p className="text-lg sm:text-xl">
            📧 Email:{" "}
            <a
              href="mailto:moviesearch@app.com"
              className="text-neutral-300 underline hover:text-neutral-100 transition"
            >
              moviesearch@app.com
            </a>
          </p>
          <p className="text-lg sm:text-xl">
            📞 Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-neutral-300 underline hover:text-neutral-100 transition"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center gap-8 text-4xl sm:text-5xl py-6">
          <a href="#" className="hover:text-green-700 transition" title="WhatsApp">
            <LiaWhatsapp />
          </a>
          <a href="#" className="hover:text-pink-400 transition" title="Instagram">
            <LiaInstagram />
          </a>
          <a href="#" className="hover:text-blue-400 transition" title="Twitter">
            <LiaTwitter />
          </a>
          <a href="#" className="hover:text-blue-600 transition" title="Facebook">
            <LiaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
