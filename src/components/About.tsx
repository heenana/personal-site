import styles from './About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Next.js',
  'Material UI',
  'HTML5/CSS3',
  'SASS/SCSS',
  'Storybook',
  'Jest',
  'Cypress',
  'GraphQL',
  'Python',
  'Node.js',
  'PostgreSQL',
  'AWS',
  'Docker',
  'Kubernetes',
];

const About: FC = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>About Me</h1>

      <div className={styles.content}>
        <div className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            <Image
              alt="Profile"
              height={365}
              src="/images/about.jpg"
              style={{ borderRadius: '16px' }}
              width={365}
            />
          </div>
        </div>

        <div className={styles.textSection}>
          <h2>👋 Hi, I&apos;m Heena!</h2>
          <p>
            I&apos;m a Senior Software Engineer based in Dallas, TX, with over 8
            years of experience building scalable web applications and leading
            engineering teams. I specialize in front-end development with a
            strong full-stack background, driving technical excellence and
            mentoring team members to deliver high-quality solutions.
          </p>
          <p>
            Currently, I&apos;m working at Venue.sh where I lead design system
            initiatives on the engineering side, drive architectural decisions
            for component libraries, and mentor my peers. Previously, I led
            front-end teams at Dictionary.com and worked as a backend engineer
            at Macy&apos;s, consistently delivering impactful projects that
            improved user experience and business metrics.
          </p>
          <p>
            I graduated from the University of Texas at Austin with a Bachelor
            of Science in Computer Science. I&apos;m passionate about creating
            maintainable codebases, establishing best practices, and fostering
            collaborative engineering cultures.
          </p>
          <p>
            In my free time I enjoy travelling, rock climbing, and trying new
            recipes. Check out some of my favorite recipes{' '}
            <Link aria-label="link to recipes" href="/recipes">
              here
            </Link>
            ! 🍳👩‍🍳
          </p>

          <div className={styles.skills}>
            <h3>Skills & Technologies</h3>
            <div className={styles.skillTags}>
              {SKILLS.map((skill) => (
                <span key={skill} className={styles.tag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default About;
