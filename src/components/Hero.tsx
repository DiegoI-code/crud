import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import PruebaFirebase from './PruebaFirebase'

const Hero = () => {
  return (
    <>
    {/* <main className={styles.main}> */}
        <h1 className={styles.title}>
          Simple CRUD example. 
        </h1>

        <p className={styles.description}>
          Based in <a href='https://github.com/mui/material-ui/blob/v5.10.14/docs/data/material/components/tables/EnhancedTable.tsx'> MUI React enhanced table component. </a>
        </p>

        {/* <EnhancedTable/> */}
      {/* </main> */}
    </>
  )
}

export default Hero