import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Intro() {
  return (
    <section id="intro" className="hero" aria-labelledby="intro-heading">
      <div className="hero-inner container">
        <div className="hero-copy">
          <p className="hero-greeting">Hi, I&apos;m</p>
          <h1 id="intro-heading">
            Cao Minh
            <br />
            Nguyen
          </h1>
          <p className="hero-role">
            Bachelor's Computer Science & Engineering Graduate
          </p>
          <p className="hero-description">
            Hi, I&apos;m a Computer Science graduate from TU Delft with a focus
            on backend development and a deep interest in exploring AI agents.
            Currently learning more about AI engineering and building agents, I
            aim to grow as a software engineer who effectively utilizes emerging
            AI technologies to build reliable, scalable software that delivers
            value to customers.
          </p>
          <div className="hero-socials">
            <a
              className="button button-primary"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub aria-hidden="true" />
              GitHub
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              className="button button-outline"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn aria-hidden="true" />
              LinkedIn
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <a
            className="cv-link"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my résumé <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-visual">
          <figure className="portrait">
            <div className="portrait-image">
              <Image
                src="/profile-photo.jpg"
                alt="Cao Minh Nguyen"
                fill
                priority
                sizes="(max-width: 600px) 80vw, (max-width: 900px) 55vw, 380px"
              />
            </div>
            <figcaption>
              <span className="portrait-location">
                <svg
                  className="portrait-flag"
                  viewBox="0 0 30 20"
                  aria-hidden="true"
                >
                  <path fill="#da251d" d="M0 0h30v20H0z" />
                  <path
                    fill="#ff0"
                    d="m15 4 1.8 4.3 4.7.4-3.6 3 1.1 4.6-4-2.5-4 2.5 1.1-4.6-3.6-3 4.7-.4Z"
                  />
                </svg>
                <span>From Vietnam</span>
              </span>
              <span className="portrait-location">
                <svg
                  className="portrait-flag"
                  viewBox="0 0 30 20"
                  aria-hidden="true"
                >
                  <path fill="#ae1c28" d="M0 0h30v7H0z" />
                  <path fill="#fff" d="M0 7h30v6H0z" />
                  <path fill="#21468b" d="M0 13h30v7H0z" />
                </svg>
                <span>TU Delft, Netherlands</span>
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
