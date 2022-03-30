import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [patientData, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/patient/basics')
      .then((res) => res.json())
      .then((patientData) => {
        setData(patientData)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!patientData) return <p>No profile data</p>

  return (
    <div className={styles.container}>
      <Head>
        <title>Thatch example app</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Thatch, {patientData.firstName} {patientData.lastName}!
        </h1>
        <p className={styles.link}>
          <Link href="/dashboard">View your patient dashboard</Link>
        </p>
      </main>

      <footer className={styles.footer}>
        An example
      </footer>
    </div>
  )
}
