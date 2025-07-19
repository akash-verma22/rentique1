import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-gray-600">

        {/* Logo and Tagline */}
        <div>
          <Link
            href="/"
            scroll={false}
            className="text-2xl font-semibold text-gray-800 hover:text-black"
          >
            RENTIQUE
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Premium Rentals. Hassle-Free Living.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-black transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-black transition">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-black transition">FAQ</Link></li>
            <li><Link href="/terms" className="hover:text-black transition">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-black transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-4">Connect With Us</h4>
          <div className="flex gap-4">
            {[faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube].map((icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social Icon"
                className="p-2 border border-gray-300 rounded-full text-gray-600 hover:text-black hover:border-black transition"
              >
                <FontAwesomeIcon icon={icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} RENTIQUE. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4">
          <Link href="/privacy" className="hover:text-black transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-black transition">Terms of Service</Link>
          <Link href="/cookies" className="hover:text-black transition">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
