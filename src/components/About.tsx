import Image from 'next/image';
import styles from './About.module.css';

const ASPECT_RATIO = 80;

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h2>Welcome!</h2>
        <p>
          My name is Heena and I&apos;m located in Dallas, Texas. I&apos;m a
          full-stack developer who enjoys building clean, user-focused web
          applications.
        </p>
      </div>
      <Image
        alt="Profile"
        height={ASPECT_RATIO * 7}
        src="/images/profile.jpg"
        width={ASPECT_RATIO * 5}
      />
    </div>
  );
}
