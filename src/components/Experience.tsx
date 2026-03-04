import { FC } from 'react';
import styles from './Experience.module.css';

const experiences = [
  {
    achievements: [
      'Led design system initiative, building comprehensive Storybook documentation and establishing component strategy',
      'Drove architectural decisions for component library structure and theming approach, influencing technical direction',
      'Collaborating with leadership on UX/UI redesign',
      'Refactored codebase to eliminate MUI style overrides and implement centralized theming system',
      'Provided technical mentorship, establishing best practices that improved code quality and team productivity',
    ],
    company: 'Venue.sh',
    description:
      'Driving design system initiatives and technical architecture decisions for component library development. Collaborating with leadership on UX/UI redesign and mentoring engineering teams.',
    location: 'Remote',
    period: 'July 2024 - Present',
    position: 'Senior Software Engineer',
    technologies: ['React', 'TypeScript', 'Material UI', 'Storybook', 'SCSS'],
  },
  {
    achievements: [
      'Led a team of 3 front-end engineers on a sitewide redesign, improving site performance by 20% and user engagement by 30% within first month',
      'Created code review developer guide for the engineering department',
      'Contributed high-quality code across the stack while managing team activities and cross-functional collaboration',
      "Awarded first place in engineering department's hackathon and exceptional engineer award",
      'Mentored mid-level engineers and conducted interviews for senior engineer candidates',
    ],
    company: 'Dictionary.com',
    description:
      'Led a team of 3 front-end engineers to rebuild sections of the site and launch a sitewide redesign. Contributed high-quality code across the stack while managing team activities and cross-functional collaboration.',
    location: 'Remote',
    period: 'March 2023 - July 2024',
    position: 'Engineering Manager & Team Lead',
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Material UI',
      'Python',
      'GraphQL',
      'AWS',
    ],
  },
  {
    achievements: [
      'Optimized codebase and led high-impact initiatives resulting in 50% increase in subscriptions within 3 months',
      'Awarded rockstar employee award for dedication and initiative',
      'Collaborated cross-functionally with engineering leads and product/design teams',
      'Launched new Grammar Coach writing tool features and redesign',
      'Led the Grammar Coach team as interim manager, fostering growth and addressing issues through effective communication.',
    ],
    company: 'Dictionary.com',
    description:
      'Launched new Grammar Coach features and redesign. Led the Grammar Coach team as interim manager, fostering growth and addressing issues through effective communication.',
    location: 'Remote',
    period: 'October 2021 - March 2023',
    position: 'Senior Software Engineer',
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Material UI',
      'Next.js',
      'Python',
      'AWS',
    ],
  },
  {
    achievements: [
      'Led Example Sentences initiative, adding new example sentences to 100,000+ words on the site',
      'Improved CI/CD pipeline efficiency, reducing runtime by 25%',
      'Designed and implemented user-friendly features to enhance learning experience',
      'Demonstrated adaptability by quickly onboarding to full-stack development',
    ],
    company: 'Dictionary.com',
    description:
      'Led the Example Sentences initiative and transitioned from back-end to full-stack engineering.',
    location: 'Oakland, CA',
    period: 'April 2020 - October 2021',
    position: 'Software Engineer',
    technologies: [
      'React',
      'Redux',
      'TypeScript',
      'Python',
      'PostgreSQL',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    achievements: [
      'Maintained and evolved API responses to support new frontend features and ensure data accuracy',
      'Transitioned site into responsive experience while ensuring code quality and performance',
      'Conducted code reviews for Header and Discovery microservices',
      'Improved front-end features by updating outdated sections and enhancing accessibility',
    ],
    company: "Macy's",
    description:
      'Sole back-end engineer in the Search and Discovery domain. Led back-end development for header and search/browse page features.',
    location: 'San Francisco, CA',
    period: '2017 - 2020',
    position: 'Software Engineer',
    technologies: [
      'Java',
      'Spring Framework',
      'Node.js',
      'JavaScript',
      'SCSS',
      'Selenium',
    ],
  },
  {
    achievements: [
      'Delivered front-end and back-end features for the Digital Support team',
    ],
    company: "Macy's",
    description:
      'Responsible for front-end deliverables and development on the Digital Support team.',
    location: 'San Francisco, CA',
    period: 'June 2016 - August 2016',
    position: 'Software Engineer Intern',
    technologies: [
      'JavaScript',
      'Backbone.js',
      'Handlebars',
      'HTML',
      'CSS',
      'jQuery',
    ],
  },
];

const Experience: FC = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Experience</h1>
      <p className={styles.subtitle}>
        My professional journey in software development
      </p>
      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <div
            key={`${exp.company}-${exp.position}`}
            className={styles.timelineItem}
          >
            <div className={styles.timelineDot}></div>
            <div className={styles.experienceCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h2 className={styles.position}>{exp.position}</h2>
                  <p className={styles.company}>{exp.company}</p>
                </div>
                <div className={styles.cardMeta}>
                  <span className={styles.period}>{exp.period}</span>
                  <span className={styles.location}>📍{exp.location}</span>
                </div>
              </div>
              <div className={styles.achievements}>
                <ul>
                  {/* TODO: Fix the keys in this file */}
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.technologies}>
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Experience;
