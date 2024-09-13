import React from 'react'
import { Link, NavLink } from "react-router-dom";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.wrapper}>
            <ul className={styles.links}>
                <li className={styles.link}> <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to='/'>Home</NavLink></li>
                <li className={styles.link}> <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to='/store'>Store</NavLink></li>
                <li className={styles.link}> <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to='/about-us'>About us</NavLink></li>
                <li className={styles.link}> <NavLink className={({ isActive }) => (isActive ? styles.active : "")} to='/contact-us'>Contact us</NavLink></li>
            </ul>
            <Link to="/sign-in-up" className={styles.singIn}>Sign in</Link>
        </nav>
    )
}

export default Navbar