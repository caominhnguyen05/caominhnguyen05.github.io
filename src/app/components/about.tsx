import {
  Aws,
  DjangoIcon,
  DockerIcon,
  GitIcon,
  Java,
  Scala,
  Javascript,
  Nestjs,
  NextjsIcon,
  Postgresql,
  Python,
  SpringIcon,
  TypescriptIcon,
  GithubIcon,
  _React as ReactIcon,
  AwsLambda,
  AwsApiGateway,
  Gitlab,
  AwsCognito,
} from "@dev.icons/react";
import SectionHeading from "./section-heading";

const skillGroups = [
  {
    label: "Languages",
    skills: [
      { name: "Java", Icon: Java },
      { name: "Python", Icon: Python },
      { name: "TypeScript", Icon: TypescriptIcon },
      { name: "JavaScript", Icon: Javascript },
      { name: "Scala", Icon: Scala },
    ],
  },
  {
    label: "Frameworks",
    skills: [
      { name: "Spring Boot", Icon: SpringIcon },
      { name: "React", Icon: ReactIcon },
      { name: "Next.js", Icon: NextjsIcon },
      { name: "NestJS", Icon: Nestjs },
      { name: "Django", Icon: DjangoIcon },
    ],
  },
  {
    label: "Tools & infrastructure",
    skills: [
      { name: "AWS", Icon: Aws },
      { name: "Amazon API Gateway", Icon: AwsApiGateway },
      { name: "AWS Lambda", Icon: AwsLambda },
      { name: "Amazon Cognito", Icon: AwsCognito },
      { name: "PostgreSQL", Icon: Postgresql },
      { name: "Docker", Icon: DockerIcon },
      { name: "Git", Icon: GitIcon },
      { name: "GitHub", Icon: GithubIcon },
      { name: "GitLab", Icon: Gitlab },
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section container"
      aria-labelledby="about-heading"
    >
      <SectionHeading number="01" title="About" />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m a{" "}
            <strong>Computer Science and Engineering graduate</strong> from{" "}
            <strong>TU Delft</strong>, where I graduated{" "}
            <strong>cum laude</strong> with a specialization in Data. I&apos;m
            passionate about building reliable, scalable software that solves
            real-world problems.
          </p>

          <p>
            Through internships at{" "}
            <strong>FPT Software, RET, and Dizconto</strong>, I&apos;ve gained
            hands-on experience in <strong>backend development</strong>, REST
            APIs, and full-stack applications across healthcare, transportation,
            and event ticketing, using technologies such as Java, Spring Boot,
            PostgreSQL, and AWS.
          </p>

          <p>
            I&apos;m particularly interested in{" "}
            <strong>AI-assisted software engineering</strong>. For my
            bachelor&apos;s thesis, I explored{" "}
            <strong>LLM-based test generation</strong> for Java libraries,
            investigating how AI can improve software testing and development
            workflows.
          </p>

          <p>
            In my free time, I enjoy watching football, working out at the gym,
            and travelling to explore new places and cultures.
          </p>
        </div>
        <div className="skills">
          <h3 className="eyebrow">Technical skills</h3>
          {skillGroups.map(({ label, skills }) => (
            <div className="skill-group" key={label}>
              <h4>{label}</h4>
              <div className="tag-list">
                {skills.map(({ name, Icon }) => (
                  <span
                    className="tag skill-tag inline-flex items-center gap-2"
                    key={name}
                  >
                    <Icon
                      size={16}
                      className="shrink-0"
                      aria-hidden="true"
                      focusable="false"
                    />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
