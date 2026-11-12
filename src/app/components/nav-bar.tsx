"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { profile } from "../data/profile";

const sections = ["About", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateActive = () => {
      const current = [...sections].reverse().find((name) => {
        const section = document.getElementById(name.toLowerCase());
        return section && section.getBoundingClientRect().top <= 180;
      });
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8;
      setActive(atBottom ? "contact" : (current?.toLowerCase() ?? ""));
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        menuButton.current?.getAttribute("aria-expanded") === "true"
      ) {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setOpen(false);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation" ref={nav}>
        <a
          href="#intro"
          className="wordmark"
          aria-label="Cao Minh, back to top"
          onClick={() => setOpen(false)}
        >
          <span>Cao Minh Nguyen</span>
        </a>
        <div className="desktop-nav">
          {sections.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              className={active === name.toLowerCase() ? "active" : ""}
              aria-current={
                active === name.toLowerCase() ? "location" : undefined
              }
            >
              {name}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a
            className="nav-social"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <FaGithub />
          </a>
          <a
            className="nav-social"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <FaLinkedinIn />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div id="mobile-navigation" className="mobile-nav" hidden={!open}>
          {sections.map((name) => (
            <a
              key={name}
              href={`#${name.toLowerCase()}`}
              aria-current={
                active === name.toLowerCase() ? "location" : undefined
              }
              onClick={() => {
                setOpen(false);
                menuButton.current?.focus();
              }}
            >
              {name}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
