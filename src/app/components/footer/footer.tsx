import "./footer.css";
import { FiArrowUp } from "react-icons/fi";
import Contact from "../contact/contact";

export default function Footer() {
  return (
    <footer className="footer closing footer-columns">
      <div className="container wrap">
        <Contact />
        <div className="footer-legal footer__legal">
          <p>© {new Date().getFullYear()} Cao Minh Nguyen</p>
          <a className="m-link" href="#intro">
            Back to top
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
