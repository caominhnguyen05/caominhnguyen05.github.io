import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer container">
      <p>
        © {new Date().getFullYear()} Cao Minh Nguyen       
      </p>
      <a href="#intro">
        Back to top
        <FiArrowUp aria-hidden="true" />
      </a>
    </footer>
  );
}
