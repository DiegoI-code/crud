import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import EnhancedTable from '../src/components/example'
import PruebaFirebase from '../src/components/PruebaFirebase'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CRUD Example</title>
        <meta name="description" content="CRUD example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my CRUD example! 
        </h1>

        <p className={styles.description}>
          Based in <a href='https://github.com/mui/material-ui/blob/v5.10.14/docs/data/material/components/tables/EnhancedTable.tsx'> MUI React enhanced table component. </a>
        </p>

        {/* <EnhancedTable/> */}
        <PruebaFirebase/>


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
