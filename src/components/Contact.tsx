'use client';

import styles from './Contact.module.css';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { FC } from 'react';
import { GITHUB_URL, LINKEDIN_URL } from '@/constants';

const Contact: FC = () => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Get In Touch</h1>
      <p className={styles.subtitle}>
        Have a question or want to work together? I&apos;d love to hear from
        you!
      </p>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <div className={styles.infoCard}>
            <div className={styles.icon}>📍</div>
            <h2>Location</h2>
            <p className={styles.text}>Dallas, TX</p>
          </div>

          <div className={styles.socialLinks}>
            <h2>Connect With Me</h2>
            <div className={styles.socials}>
              <a
                className={styles.socialLink}
                href={GITHUB_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image alt="" height={20} src="/images/github.svg" width={20} />
                GitHub
              </a>
              <a
                className={styles.socialLink}
                href={LINKEDIN_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  alt=""
                  height={20}
                  src="/images/linked-in.svg"
                  width={20}
                />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </main>
  </div>
);

export default Contact;
