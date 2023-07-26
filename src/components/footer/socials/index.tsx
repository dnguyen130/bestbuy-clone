import { ReactElement } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Socials(): ReactElement {
  return (
    <div className="socialscont">
      <h3>Be the first to know</h3>
      <p>
        Sign up to stay in the loop about the hottest deals, coolest new
        products, and exclusive sales events.
      </p>
      <div className="form">
        <input placeholder="Email Address" />
        <button>Sign Up</button>
      </div>
      <ul>
        <li>
          <FaFacebookF size="100%" />
        </li>
        <li>
          <FaInstagram size="100%" />
        </li>
        <li>
          <FaLinkedinIn size="100%" />
        </li>
        <li>
          <FaPinterestP size="100%" />
        </li>
        <li>
          <FaTwitter size="100%" />
        </li>
        <li>
          <FaYoutube size="100%" />
        </li>
      </ul>
    </div>
  );
}
