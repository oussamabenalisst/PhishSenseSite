import Link from "next/link";
import { FaLinkedin, FaGithub, FaLink } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-green-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-300">
                  Services
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/oussamabenalisst"
                target="_blank"
                className="hover:text-green-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/oussama-benali-ob/"
                target="_blank"
                className="hover:text-green-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/oussamabenalisst/PhishSense"
                target="_blank"
                className="hover:text-green-300"
              >
                <FaLink size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: info@phishsense.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-4 mt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PhishSense. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
