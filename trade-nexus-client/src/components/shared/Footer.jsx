import React from "react";
import logo from "../../assets/Logo-removebg-preview.png";
import { Link } from "react-router";
import {
  TiSocialFacebook,
  TiSocialYoutube,
  TiSocialTwitter,
} from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 border-t-2 border-base-300">
      <aside>
        <img src={logo} alt="" className="rounded-full w-13" />
        <p>
          Trade Nexus
          <br />
          Providing reliable tech since 1990
        </p>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Trade
          Nexus
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Links</h6>
        <Link to="/all-products" className="link link-hover">
          Products
        </Link>
        <Link to="/categories" className="link link-hover">
          Categories
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/privacy" className="link link-hover">
          Privacy Policy
        </Link>
        <Link to="/terms" className="link link-hover">
          Terms & Conditions
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link
            to="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialTwitter size={32} />
          </Link>
          <Link
            to="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialYoutube size={32} />
          </Link>
          <Link
            to="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialFacebook size={32} />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
