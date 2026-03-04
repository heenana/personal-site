import Intro from '@/components/Intro';
import styles from './page.module.css';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Intro />
      </main>
    </div>
  );
}
