import React from 'react'
import styles from '../styles/Logo.module.css'

function Logo() {
  return (
    <div className={styles.logo__container}>
      <img src='/assets/Logo.png' alt='logo' />
    </div>
  )
}

export default Logo
