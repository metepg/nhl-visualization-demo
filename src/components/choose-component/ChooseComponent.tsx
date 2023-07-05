import React, {useState} from 'react';
import styles from './ChooseComponent.module.css';

const ChooseComponent: React.FC = () => {
    const [selected, setSelected] = useState('gameStats'); // Set the default selected button
    const handleButtonClick = (identifier: string) => {
        setSelected(identifier);
    };

    return (
        <>
            <h1>Choose to get started</h1>
            <hr/>
            <div className={styles.statsSelectionContainer}>
                <button
                    style={{marginRight: '15px'}}
                    className={`${styles.underlineBtn} ${selected === 'gameStats' ? styles.selected : ''}`}
                    onClick={() => handleButtonClick('gameStats')}>GAME STATS
                </button>
                <button
                    className={`${styles.underlineBtn} ${selected === 'playerStats' ? styles.selected : ''}`}
                    onClick={() => handleButtonClick('playerStats')}>PLAYER & TEAM STATS
                </button>
            </div>
            <hr/>
            <div className={styles.buttonContainer}>
                <button className={styles.teamButton}>BY TEAM</button>
                <button className={styles.dateButton}>BY DATE</button>
            </div>
        </>
    );
};

export default ChooseComponent;
