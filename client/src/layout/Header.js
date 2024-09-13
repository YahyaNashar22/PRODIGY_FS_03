import React from 'react';

import styles from "../styles/Header.module.css";
import Navbar from '../components/Navbar';


const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.logo}>
                <div></div>
                <div className={styles.titlesContainer}>
                    <h1 className={styles.title}>PRODIGY_FS_03 </h1>
                    <h3 className={styles.subTitle}>E-Commerce Application</h3>
                </div>
            </div>

            <Navbar />
        </header>
    )
}

export default Header