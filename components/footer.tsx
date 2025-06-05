import Link from "next/link";
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green-100">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-300">
                  Docs
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Social Media Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center sm:justify-start space-x-6">
              <a
                href="https://github.com/oussamabenalisst"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-200"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/oussama-benali-ob/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-200"
              >
                <FaLinkedin size={28} />
              </a>
              <a
                href="https://github.com/oussamabenalisst/PhishSense"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors duration-200"
              >
                <FaLink size={28} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center sm:justify-start">
                <span>Email: info@phishsense.com</span>
              </p>
              <p className="flex items-center justify-center sm:justify-start">
                <span>Phone: +1 (123) 456-7890</span>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 mt-4 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} PhishSense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
