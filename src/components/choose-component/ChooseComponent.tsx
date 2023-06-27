import React, {useState} from 'react';
import styles from './ChooseComponent.module.css';

const ChooseComponent: React.FC = () => {
    const [selected, setSelected] = useState('gameStats'); // Set the default selected button
    const handleButtonClick = (identifier: string) => {
        console.log(selected)
        setSelected(identifier);
    };

    return (
        <>
            {/*<div className={styles.headerWrapper}>*/}
                <h1>Choose to get started</h1>
            {/*</div>*/}
            <hr/>
            <div className={styles.statsSelectionContainer}>
                <button
                    style={{marginRight: '15px'}}
                    className={`${styles.underlineBtn} ${selected === 'gameStats' ? styles.selected : ''}`}
                    onClick={() => handleButtonClick('gameStats')}>GAME STATS</button>
                <button
                    className={`${styles.underlineBtn} ${selected === 'playerStats' ? styles.selected : ''}`}
                    onClick={() => handleButtonClick('playerStats')}>PLAYER & TEAM STATS</button>
            </div>
            <hr/>
            <div className={styles.buttonContainer}>
                <button className={styles.button1}>BY TEAM</button>
                <button className={styles.button2}>BY DATE</button>
            </div>
        </>
    );
};

export default ChooseComponent;
