'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">heena narottam</Link>
          <p>Senior Software Engineer</p>
        </div>
        {/* Desktop nav */}
        <nav className={styles.desktopNav}>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className={styles.hamburger}
          onClick={toggleMenu}
        >
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ''
            }`}
          />
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ''
            }`}
          />
          <span
            className={`${styles.hamburgerLine} ${
              isMenuOpen ? styles.open : ''
            }`}
          />
        </button>
        {/* Mobile nav */}
        <nav
          className={`${styles.mobileNav} ${
            isMenuOpen ? styles.mobileNavOpen : ''
          }`}
        >
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/projects" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="/experience" onClick={closeMenu}>
            Experience
          </Link>
          <Link href="/recipes" onClick={closeMenu}>
            Recipes
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
