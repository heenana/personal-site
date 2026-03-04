import { FC } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    company: 'Venue.sh',
    description:
      'Led the design system initiative at Venue.sh, building a comprehensive component library with Storybook documentation. Refactored codebase to eliminate MUI style overrides and implement centralized theming, establishing maintainable patterns across the organization.',
    technologies: ['React', 'TypeScript', 'Material UI', 'Storybook', 'SCSS'],
    title: 'Design System & Component Library',
  },
  {
    company: 'Dictionary.com',
    description:
      'Led a team of 3 engineers to rebuild major sections and launch a sitewide redesign. Improved site performance by 20% and user engagement by 30% within the first month post-launch.',
    technologies: ['React', 'Redux', 'TypeScript', 'GraphQL', 'AWS'],
    title: 'Dictionary.com Site Redesign',
  },
  {
    company: 'Dictionary.com',
    description:
      'Launched new features and redesign for Grammar Coach, a writing assistance tool. Optimized codebase and led high-impact initiatives resulting in a 50% increase in subscriptions within 3 months.',
    technologies: ['React', 'Redux', 'TypeScript', 'Material UI', 'Next.js'],
    title: 'Grammar Coach Writing Tool',
  },
  {
    company: 'Dictionary.com',
    description:
      'Led the initiative to add new example sentences to 100,000+ words on Dictionary.com. Designed and implemented user-friendly features to enhance the learning experience for millions of users.',
    technologies: ['React', 'Redux', 'TypeScript', 'Python', 'PostgreSQL'],
    title: 'Example Sentences Initiative',
  },
  {
    company: "Macy's",
    description:
      "Led back-end development for major header and search/browse page redesigns at Macy's. Transitioned the site into a responsive experience while ensuring code quality and performance enhancements.",
    technologies: ['Java', 'Spring Framework', 'Node.js', 'JavaScript', 'SCSS'],
    title: "Macy's Header & Search Redesign",
  },
  {
    company: 'Dictionary.com',
    description:
      'Improved CI/CD pipeline efficiency at Dictionary.com, reducing runtime by 25%. Implemented testing strategies and best practices that contributed to a culture of excellence within the team.',
    technologies: ['Jenkins', 'Semaphore', 'Docker', 'Kubernetes', 'AWS'],
    title: 'CI/CD Pipeline Optimization',
  },
];

const Projects: FC = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Key Projects</h1>
      <p className={styles.subtitle}>
        Highlights of impactful projects I&apos;ve led throughout my career.
      </p>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.projectCard}>
            <div className={styles.cardHeader}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <span className={styles.company}>{project.company}</span>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>

            <div className={styles.technologies}>
              {project.technologies.map((tech) => (
                <span
                  key={`${project.company}-${tech}`}
                  className={styles.techTag}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Projects;
