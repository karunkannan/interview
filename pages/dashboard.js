import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

export default function Dashboard() {
  
  return (
    <>
      <Head>
        <title>Thatch example dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        
      </div>
    </>
  )
}