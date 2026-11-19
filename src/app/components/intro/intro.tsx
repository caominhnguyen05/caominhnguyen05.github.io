import "./intro.css";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "../../data/profile";

export default function Intro() {
  return (
    <section
      id="intro"
      className="hero hero--split"
      data-enter
      aria-labelledby="intro-heading"
    >
      <div className="container wrap">
        <div className="hero-inner hero-text">
          <div className="hero-copy">
            <p className="hero-greeting">
              Hi, I&apos;m
            </p>
            <h1 id="intro-heading" data-enter-whole>
              Cao Minh{" "}
              <span>Nguyen</span>
            </h1>
            <p className="hero-role">
              Bachelor&apos;s Computer Science & Engineering Graduate
            </p>
            <p className="hero-description hero__lead">
              Hi, I&apos;m a Computer Science graduate from TU Delft with a focus
              on backend development and a deep interest in exploring AI agents.
              Currently learning more about AI engineering and building agents, I
              aim to grow as a software engineer who effectively utilizes emerging
              AI technologies to build reliable, scalable software that delivers
              value to customers.
            </p>
            <div className="hero-socials">
              <a
                className="button button-primary btn btn--primary"
                href="#projects"
              >
                View my Work
                <FiArrowUpRight aria-hidden="true" />
              </a>
              <a
                className="button button-outline btn btn--secondary"
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
              >
                View my résumé
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="hero-facts">
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
            </div>
          </div>
          <div className="hero-visual">
            <div className="portrait-image hero__media" data-enter-media data-visual>
              <Image
                src="/profile-photo.jpg"
                alt="Cao Minh Nguyen"
                fill
                priority
                sizes="(max-width: 900px) 89vw, 540px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
