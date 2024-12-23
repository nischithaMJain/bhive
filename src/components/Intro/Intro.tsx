import React from 'react'
import styles from './Intro.module.scss'
const Intro = () => {
  return (
    <div className={styles.intro}>
      <div className={styles.content}>Host your meeting with world-class amenities. Starting at <span className={styles.price}> ₹199/-!</span></div>
    </div>
  )
}

export default Intro
