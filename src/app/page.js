import Image from 'next/image';
import styles from './page.module.css';
import Tabs from './components/Tabs';
import { GeistMono } from 'geist/font/mono';
import Link from 'next/link';




export default function Home() {
  return (
    <main className={styles.main}>
   <div className={styles.box}>
    <div className={styles.boxImg}>
      <Image src="/profile.jpg" alt="Profile pic" width={150} height={150} className={styles.boxPic}/>
    </div>
    <div className={styles.boxText}>
      <div className={styles.boxTextHeading}>
        <h1 className={styles.boxTextHeadingTitle}>Ivana Sosa Cordero</h1>
        <p className={styles.boxTextHeadingSubtitle}>Front End developer</p>
    
        <p className={styles.geolocation}>
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd" stroke="currentColor" stroklinecap="round" stroklinejoin="round" transform="translate(2 3)"><path d="m8 16c4.4380025 0 8-3.5262833 8-7.96428571 0-4.43800246-3.5619975-8.03571429-8-8.03571429-4.43800245 0-8 3.59771183-8 8.03571429 0 4.43800241 3.56199755 7.96428571 8 7.96428571z"/><path d="m1 5h14"/><path d="m1 11h14"/><path d="m8 16c2.2190012 0 4-3.5262833 4-7.96428571 0-4.43800246-1.7809988-8.03571429-4-8.03571429-2.21900123 0-4 3.59771183-4 8.03571429 0 4.43800241 1.78099877 7.96428571 4 7.96428571z"/></g></svg>
        Chaco, Argentina</p>
      
        <div className={styles.boxContact}>
          <Link href="https://github.com/ivanalsc" target="_blank" className={styles.boxLink}>
            <Image 
              src="/github.png"
              width={20}
              height={20}
              alt="Github profile"
            />
            <p className={styles.boxLinkText}>Github</p>
            
          </Link>
          <Link href="https://www.linkedin.com/in/ivana-sosa-cordero/" target="_blank" className={styles.boxLink}>
          <Image 
              src="/linkedin.png"
              width={20}
              height={20}
              alt="LinkedIn profile"
            />
            <p className={styles.boxLinkText}>LinkedIn</p>
          </Link>
          <Link  href="mailto:ivanasosacordero@gmail.com" className={styles.boxLink}>
          <Image 
              src="/gmail.png"
              width={20}
              height={20}
              alt="Send email"
            />
            <p className={styles.boxLinkText}>Mail</p>
            </Link>


        </div>
        <div className={styles.boxAbout}>
          <Tabs font={GeistMono}/>
         

        </div>


      </div>
      
    </div>

   </div>


    </main>
  )
}
