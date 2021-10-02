import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Lesson Next.js</h1>
      <Link href="/test-ssg">
        <a>Test SSG</a>
      </Link>
    </div>
  );
}
