import React from 'react'
import styles from '../styles/Footer.module.css';
import Logo from './Logo';

function Footer() {
  return (
    <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
            <Logo />
            <img src='/assets/LOSANGELES MOUNTAINS.png' />
        </div>
        <div className={styles.footer__text}>
            <h3>Copyright 2016. All rights reserved</h3>
        </div>
                  
    </div>
  )
}

export default Footer
