import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="Ninja-List" />
    </Head>
      <div>
          <h1 className={styles.title} >Home Page</h1>
          <p className={styles.text} >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor distinctio ipsa debitis itaque. Libero officiis mollitia ullam laborum, sit reiciendis.</p>
          <p className={styles.text} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui deleniti voluptatibus eos quidem sed commodi mollitia numquam vero doloremque sint!</p>
          <Link href="/ninjas" >
            <a className={styles.btn} >See Ninja Listing</a>
          </Link>
        </div>    
    </>
  )
}
