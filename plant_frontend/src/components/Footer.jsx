import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    {
      title: "ABOUT US",
      links: [
        "Our Story",
        "Contact Us",
        "Careers",
        "Locate Stores",
        "Own Grown",
        "Garden Services & Maintenance",
      ],
    },
    {
      title: "CUSTOMER CARE",
      links: [
        "Take The Plant Quiz",
        "Track Order",
        "Shipping Policy",
        "Terms and Conditions",
        "Privacy Policy",
        "FAQs",
        "Refund policy",
      ],
    },
    {
      title: "OFFERS & REWARDS",
      links: ["Plant Parent Rewards Club", "Ugaoo Coupons"],
    },
  ];

  const contactInfo = [
    { label: "WhatsApp us at:", value: "8087087224" },
    { label: "Call:", value: "+91-9129912991" },
    { label: "Email:", value: "support@ugaoo.com" },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaXTwitter />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6 ">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 px-12">
        
        {/* Footer Links */}
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Get in touch */}
        <div>
          <h4 className="font-semibold mb-3">GET IN TOUCH</h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            {contactInfo.map((item, i) => (
              <li key={i} className="border-b border-gray-200 pb-1">
                <span className="font-medium">{item.label}</span> {item.value}
              </li>
            ))}
          </ul>

          {/* Newsletter */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">SIGN UP FOR OUR NEWSLETTER</h4>
            <div className="flex items-center border-b border-gray-400 pb-1">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-1 outline-none text-sm"
              />
              <button className="ml-2 text-lg font-bold">→</button>
            </div>
            <p className="text-gray-600 text-xs mt-2">
              For plant care tips, our featured plant of the week, exclusive offers and discounts
            </p>
          </div>

          {/* Social */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">FOLLOW US</h4>
            <div className="flex space-x-4 text-xl text-gray-700">
              {socialIcons.map((social, i) => (
                <a key={i} href={social.link} className="hover:text-green-600">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* App Download */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Download App!</h4>
            <div className="flex space-x-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 mt-10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm border-t border-gray-200 pt-4">
        <p>© 2025, <span className="text-green-600">Ugaoo</span>. All rights reserved.</p>
        <div className="flex space-x-2 mt-3 md:mt-0">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Google_Pay_Logo.svg" alt="GPay" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Shopify_logo_2018.svg" alt="Shop" className="h-5" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
