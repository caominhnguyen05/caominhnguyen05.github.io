import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/education";
import SectionHeading from "./section-heading";

export default function Education() {
  return (
    <section
      id="education"
      className="section container"
      aria-labelledby="education-heading"
    >
      <SectionHeading number="04" title="Education" />
      <div className="education-list">
        {education.map((item) => (
          <article className="education-item" key={item.institution}>
            <span className="education-icon">
              <FiBookOpen aria-hidden="true" />
            </span>
            <div>
              <h3>{item.institution}</h3>
              <p>{item.degree}</p>
            </div>
            <span className="education-years mono">{item.years}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
