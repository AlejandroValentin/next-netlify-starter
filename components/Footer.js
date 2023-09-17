import styles from './Footer.module.css'
import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
      </footer>
    </>
  )
}
