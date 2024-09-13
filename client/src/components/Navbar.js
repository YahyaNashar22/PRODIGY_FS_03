import React from 'react'
import { Link, NavLink } from "react-router-dom";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.wrapper}>
            <ul className={styles.links}>
                <li className={styles.link}> <NavLink to='/'>Home</NavLink></li>
                <li className={styles.link}> <NavLink to='/store'>Store</NavLink></li>
                <li className={styles.link}> <NavLink to='/about-us'>About us</NavLink></li>
                <li className={styles.link}> <NavLink to='/contact-us'>Contact us</NavLink></li>
            </ul>
            <Link to="/signin" className={styles.singIn}>Sign in</Link>
        </nav>
    )
}

export default Navbar