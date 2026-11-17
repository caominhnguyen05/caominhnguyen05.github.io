import "./experience.css";
import { experiences } from "../../data/experiences";
import SectionHeading from "../section-heading/section-heading";

export default function Experience() {
  return (
    <section id="experience" className="section container" aria-labelledby="experience-heading">
      <SectionHeading id="experience-heading" title="where i've been." />
      <div className="experience-list">
        {experiences.map((experience) => (
          <article className="experience-item" key={`${experience.company}-${experience.role}`}>
            <span className="experience-date">{experience.period}</span>
            <div className="experience-content">
              <div className="experience-company">
                <a href={experience.companyUrl} target="_blank" rel="noopener noreferrer">
                  {experience.company}
                </a>
                <span className="experience-type">{experience.type}</span>
              </div>
              <p className="experience-role">{experience.role}</p>
              <div className="experience-details">
                <ul>
                  {experience.description.map((point) => <li key={point}>{point}</li>)}
                </ul>
                <div className="experience-technologies mono" aria-label="Technologies">
                  {experience.tags.map((tag, index) => (
                    <span key={tag}>
                      {index > 0 && <span className="experience-separator" aria-hidden="true"> / </span>}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
