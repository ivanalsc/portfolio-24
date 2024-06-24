import styles from './header.module.css';
import Link from "next/link";




export default function Header() {
  return (
    <header className={styles.header}>
       <div className={styles.headerContainer}>
       <Link href="/"><p>{'</>'}</p></Link>

       </div>
    </header>
  )
}