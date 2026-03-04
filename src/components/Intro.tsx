import Image from 'next/image';
import styles from './Intro.module.css';
import { FC } from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '@/constants';

const ASPECT_RATIO = 80;

const Intro: FC = () => (
  <div className={styles.container}>
    <div className={styles.description}>
      <h2>Welcome!</h2>
      <p>
        My name is Heena and I&apos;m located in Dallas, Texas. I&apos;m a
        full-stack developer who enjoys building clean, user-focused web
        applications.
      </p>
      <div className={styles.socialLinks}>
        <a
          aria-label="GitHub"
          className={styles.socialLink}
          href={GITHUB_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image alt="GitHub" height={24} src="/images/github.svg" width={24} />
        </a>
        <a
          aria-label="LinkedIn"
          className={styles.socialLink}
          href={LINKEDIN_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            alt="LinkedIn"
            height={24}
            src="/images/linked-in.svg"
            width={24}
          />
        </a>
      </div>
    </div>
    <Image
      alt="Profile photo of Heena"
      height={ASPECT_RATIO * 7}
      src="/images/profile.jpg"
      style={{ objectFit: 'cover' }}
      width={ASPECT_RATIO * 5}
    />
  </div>
);

export default Intro;
