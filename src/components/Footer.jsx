import logo from "../assets/logo.svg";
import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-250 pt-800 pb-1000 bg-[#fafafa]">
      <div className="max-w-[350px] space-y-400">
        <img src={logo} alt="Equalizer logo" />
        <div className="text-preset-5">
          <p>All rights reserved © Equalizer 2021</p>
          <p>
            Have any problems? Contact us via social media or email us at <br />
            <span className="text-preset-5-bold">equalizer@example.com</span>
          </p>
        </div>
        <div className="flex items-center gap-300 text-xl">
          <a
            href="#"
            className="text-slate hover:text-orange transition-colors"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="#"
            className="text-slate hover:text-orange transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-slate hover:text-orange transition-colors"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
