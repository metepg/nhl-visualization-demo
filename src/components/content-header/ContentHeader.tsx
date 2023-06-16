import React from "react";
import styles from './Content-Header.module.css';

const ContentHeader: React.FC = () => {
    return(
        <div className={styles.container}>
            <div className={styles.column}>
                <div className={styles.header}>Date</div>
            </div>
            <div className={styles.column}>
                <div className={styles.header}>Game</div>
            </div>
            <div className={styles.column}>
                <div className={styles.header}>1st Period</div>
            </div>
            <div className={styles.column}>
                <div className={styles.header}>2nd Period</div>
            </div>
            <div className={styles.column}>
                <div className={styles.header}>3rd Period</div>
            </div>
            <div className={styles.column}>
                <div className={styles.header}>OT</div>
            </div>
            <div className={styles.column}>
                <div className={styles.header}>SO</div>
            </div>
            <div className={styles.column}>
                <div className={styles.header}>Result</div>
            </div>
            <div className={styles.column}>
                <div className={styles.header}>+</div>
            </div>
        </div>
    )
}

export default ContentHeader