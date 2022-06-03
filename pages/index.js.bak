import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { news } from '../data'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>Icube Training</title>
          <meta name="description" content="Training icube description" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href='/about'>
          <h3>
            About
          </h3>
        </Link>

        <Link href='/news'>
          <h3>News</h3>
        </Link>

        <Link href='/categories'>
          <h3>Category</h3>
        </Link>


        <h3>Fetch Data</h3>
        <Link href='/csr'>
          <p>CSR</p>
        </Link>
        <Link href='/ssr'>
          <p>SSR</p>
        </Link>
        <Link href='/ssg'>
          <p>SSG</p>
        </Link>
        <Link href='/isg'>
          <p>ISG</p>
        </Link>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
