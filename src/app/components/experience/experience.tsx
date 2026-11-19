import "./experience.css";
import { experiences } from "../../data/experiences";
import SectionHeading from "../section-heading/section-heading";
import { FiArrowUpRight } from "react-icons/fi";

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
      <div className="container wrap">
        <SectionHeading id="experience-heading" title="where i've been." />
        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={`${experience.company}-${experience.role}`} aria-labelledby={`experience-role-${index}`}>
              <header className="experience-header">
                <div className="experience-meta">
                  <span className="experience-date">{experience.period}</span>
                  <span className="experience-type">{experience.type}</span>
                </div>
                <h3 className="experience-role" id={`experience-role-${index}`}>{experience.role}</h3>
                <a className="experience-company" href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                  {experience.company}
                  <FiArrowUpRight aria-hidden="true" />
                  <span className="experience-sr-only"> (opens in a new tab)</span>
                </a>
              </header>
              <div className="experience-content">
                <div className="experience-details">
                  <ul>
                    {experience.description.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
                <ul className="experience-technologies" aria-label="Technologies">
                  {experience.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
