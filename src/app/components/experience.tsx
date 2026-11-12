import { FiPlus } from "react-icons/fi";
import { experiences } from "../data/experiences";
import SectionHeading from "./section-heading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section container"
      aria-labelledby="experience-heading"
    >
      <SectionHeading number="02" title="Experience" />
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <details
            className="experience-item"
            key={`${experience.company}-${experience.role}`}
            open={index === 0}
          >
            <summary>
              <span className="experience-date mono">{experience.period}</span>
              <span className="experience-position">
                <span className="experience-company">
                  {experience.company}
                  <span className="experience-type">{experience.type}</span>
                </span>
                <span className="experience-role">{experience.role}</span>
              </span>
              <span className="expand-icon">
                <FiPlus aria-hidden="true" />
                <span className="sr-only">
                  Toggle {experience.company} details
                </span>
              </span>
            </summary>
            <div className="experience-details">
              <ul>
                {experience.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="tag-list">
                {experience.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
