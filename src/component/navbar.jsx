import React from 'react'

import styles from './navbar.module.css'

const navbar = () => {
  return (
    <nav className={styles.navbar}>
        <a href="/" className={styles.title}>GroundDesk</a>
        <div className={styles.menu}>
        <ul className={styles.menuItems}>
            <a href="/"><li>Product</li></a> 
            <a href="/"><li>Solution</li></a> 
            <a href="/"><li>Customer</li></a> 
            <a href="/"><li>Pricing</li></a> 
            <a href="/"><li>About us</li></a> 
        </ul>
        </div>
        <div className={styles.buttonContainer}>
            <a href="/"><button className={styles.button1}>Login</button></a>
            <a href="/"><button className={styles.button2}>Sign up</button></a>
        </div>

    </nav>
  )
}

export default navbar
