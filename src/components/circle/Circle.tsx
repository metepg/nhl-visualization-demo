import React from 'react';
import styles from './Circle.module.css'

interface CircleProps {
    shootout: boolean | undefined;
}
const Circle: React.FC<CircleProps> = ({shootout}) => {
    console.log(shootout)
    return (
        <div className={styles.container}>
            <div className={styles.circle} style={{backgroundColor:  shootout ? 'var(--red)' : 'var(--black)'}}></div>
        </div>
    );
};

export default Circle;
