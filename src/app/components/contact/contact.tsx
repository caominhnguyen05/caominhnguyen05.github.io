import "./contact.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { profile } from "../../data/profile";
import SectionHeading from "../section-heading/section-heading";

export default function Contact() {
  const links = [
    {
      label: "Email",
      detail: profile.email,
      href: `mailto:${profile.email}`,
      Icon: FiMail,
    },
    {
      label: "GitHub",
      detail: "caominhnguyen05",
      href: profile.github,
      Icon: FaGithub,
    },
    {
      label: "LinkedIn",
      detail: "caominh-nguyen",
      href: profile.linkedin,
      Icon: FaLinkedinIn,
    },
  ];
  return (
    <section
      id="contact"
      className="closing__cta close--type"
      data-moment="word-highlight"
      aria-labelledby="contact-heading"
    >
      <SectionHeading id="contact-heading" title="let's connect." />
      <div className="contact-grid">
        <div className="contact-copy">
          <p className="mo-wh__text">
            Interested in working together or have something in mind? I&apos;m
            looking for software engineering opportunities and always happy to
            connect.
          </p>
          <a className="button button-primary btn btn--primary btn--xl" href={`mailto:${profile.email}`}>
            <FiMail aria-hidden="true" />
            Get in touch
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="contact-links">
          {links.map(({ label, detail, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
            >
              <Icon className="contact-link-icon" aria-hidden="true" />
              <span>
                <span className="contact-label">{label}</span>
                <span className="contact-detail">{detail}</span>
              </span>
              <FiArrowUpRight className="contact-arrow" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
