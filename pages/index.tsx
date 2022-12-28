import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import EnhancedTable from '../src/components/example'
import PruebaFirebase from '../src/components/PruebaFirebase'
import GlobalContextProvider from '../src/providers/GlobalContextProvider'

export default function Home() {
  return (
    <GlobalContextProvider>

    <div className={styles.container}>
      <Head>
        <title>CRUD Example</title>
        <meta name="description" content="CRUD example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PruebaFirebase/>


    </div>
    </GlobalContextProvider>
  )
}
