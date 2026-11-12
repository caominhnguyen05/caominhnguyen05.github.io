import Image from "next/image";
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
              <Image
                src={item.logo}
                alt={`${item.institution} logo`}
                width={40}
                height={40}
                className="education-logo"
              />
            </span>
            <div>
              <h3>
                <a href={item.website} target="_blank" rel="noopener noreferrer">
                  {item.institution}
                </a>
              </h3>
              {item.faculty && <p>{item.faculty}</p>}
              <p>{item.degree}</p>
            </div>
            <span className="education-years">{item.years}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
