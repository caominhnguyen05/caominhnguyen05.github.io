"use client";

import "./projects.css";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  FiArrowLeft,
  FiArrowRight,
  FiCode,
  FiExternalLink,
} from "react-icons/fi";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { projects } from "../../data/projects";
import SectionHeading from "../section-heading/section-heading";

const PAGE_SIZE = 4;
const projectStyles: Record<string, string> = {
  "AI ENGINEERING": "project-card--diagram",
  "FRONTEND DEVELOPMENT": "project-card--frontend",
  "BACKEND & DESKTOP": "project-card--desktop",
};

export default function Projects() {
  const [page, setPage] = useState(1);
  const heading = useRef<HTMLDivElement>(null);
  const pageCount = Math.ceil(projects.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visibleProjects = projects.slice(start, start + PAGE_SIZE);

  const changePage = (next: number) => {
    if (next < 1 || next > pageCount || next === page) return;
    setPage(next);
    heading.current?.focus({ preventScroll: true });
    heading.current?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="container wrap">
        <div ref={heading} tabIndex={-1} className="projects-heading-anchor">
          <SectionHeading
            id="projects-heading"
            title="what i've built."
          />
        </div>
        <BentoGrid className="projects-bento" id="project-grid">
          {visibleProjects.map((project) => (
            <BentoCard
              key={project.title}
              className={`project-card card ${projectStyles[project.category ?? ""] ?? ""}`}
              name={project.title}
              description={project.description}
              eyebrow={project.category ?? "SOFTWARE PROJECT"}
              background={
                <div className="project-preview panel" data-visual>
                  {project.imageUrl ? (
                    <div className="project-preview-image">
                      <Image
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        className="frame__img"
                        fill
                        sizes="(max-width: 640px) 90vw, (max-width: 900px) 48vw, 590px"
                      />
                    </div>
                  ) : (
                    <div className="project-image-fallback">
                      <FiCode aria-hidden="true" />
                      <span className="mono">{project.title.toUpperCase()}</span>
                    </div>
                  )}
                </div>
              }
              badges={
                <div className="tag-list" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <span className="tag skill-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              }
              actions={
                <>
                  {project.githubUrl && (
                    <a
                      className="button button-primary btn btn--primary"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub aria-hidden="true" />
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      className="button button-outline btn btn--secondary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live site`}
                    >
                      <FiExternalLink aria-hidden="true" />
                      Live site
                    </a>
                  )}
                </>
              }
            />
          ))}
        </BentoGrid>
        {pageCount > 0 && (
          <div className="pagination">
            <p
              className="pagination-status"
              role="status"
              aria-live="polite"
            >
              Showing {start + 1}–{Math.min(start + PAGE_SIZE, projects.length)}{" "}
              of {projects.length} projects
            </p>
            <nav className="pagination-controls" aria-label="Project pages">
              <button
                type="button"
                onClick={() => changePage(page - 1)}
                disabled={page === 1}
                aria-label="Previous project page"
                aria-controls="project-grid"
              >
                <FiArrowLeft aria-hidden="true" />
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (number) => (
                  <button
                    type="button"
                    key={number}
                    aria-label={`Project page ${number}`}
                    aria-current={page === number ? "page" : undefined}
                    aria-controls="project-grid"
                    onClick={() => changePage(number)}
                  >
                    {number}
                  </button>
                ),
              )}
              <button
                type="button"
                onClick={() => changePage(page + 1)}
                disabled={page === pageCount}
                aria-label="Next project page"
                aria-controls="project-grid"
              >
                <FiArrowRight aria-hidden="true" />
              </button>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
