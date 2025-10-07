import styles from "./page.module.css";
import Link from 'next/link';
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Hello world!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
