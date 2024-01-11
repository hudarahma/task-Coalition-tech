import React from 'react'
import styles from '../styles/Schedule.module.css';

function Schedule() {
  return (
    <div className={styles.schedule__container}>
      <div className={styles.schedule__wrapper}>
        <div className={styles.schedule__title}>
            Schedule
        </div>
        <div className={styles.schedule__date__place}>
            <h2>28 Nov 2016</h2>
            <h2>Vistibulum viverra</h2>
        </div>
        <div className={styles.schedule__date__place}>
            <h2>28 Nov 2016</h2>
            <h2>Vistibulum viverra</h2>
        </div>
        <div className={styles.schedule__date__place } style={{marginTop: '20px'}}>
            <h2>18 DEC 2016</h2>
            <h2>Vistibulum viverra</h2>
        </div>
        <div className={styles.schedule__date__place} style={{marginTop: '20px'}}>
            <h2>7 JAN 2017</h2>
            <h2>Vistibulum viverra</h2>
        </div>
      </div>
    </div>
  )
}

export default Schedule
