import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer container">
      <p>
        © {new Date().getFullYear()} Cao Minh Nguyen
        <span className="footer-divider" aria-hidden="true">
          /
        </span>
        <span className="footer-note">Built with care & code.</span>
      </p>
      <a href="#intro">
        Back to top
        <FiArrowUp aria-hidden="true" />
      </a>
    </footer>
  );
}
