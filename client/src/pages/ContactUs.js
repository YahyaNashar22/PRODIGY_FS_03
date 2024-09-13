import React from 'react';

import styles from "../styles/ContactUs.module.css";

import ContactUsForm from '../components/ContactUsForm';

const ContactUs = () => {
    return (
        <main className={styles.wrapper}>
            <ContactUsForm />
            <div className={styles.rules}>
                <h2 className={styles.title}>Community Rules</h2>
                <ul className={styles.rulesList}>
                    <li className={styles.ruleItem}>No swearing or offensive language.</li>
                    <li className={styles.ruleItem}>Be respectful to all members.</li>
                    <li className={styles.ruleItem}>No spamming or self-promotion.</li>
                    <li className={styles.ruleItem}>Follow all applicable laws and regulations.</li>
                    <li className={styles.ruleItem}>Report any inappropriate behavior to moderators.</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactUs