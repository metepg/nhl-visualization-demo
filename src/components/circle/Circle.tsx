import React from 'react';
import styles from './Circle.module.css'

interface CircleProps {
    winner: string;
}
const Circle: React.FC<CircleProps> = ({winner}) => {
    return (
        <div className={styles.container}>
            <div className={styles.circle} style={{backgroundColor: winner === 'home' ? 'var(--red)' : 'var(--black)'}}></div>
        </div>
    );
};

export default Circle;
