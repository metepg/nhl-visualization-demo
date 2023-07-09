import React from 'react';
import styles from './Shootout.module.css'

interface Props {
    shootout: boolean | undefined;
}
const Shootout: React.FC<Props> = ({shootout}) => {
    return (
        <div className={styles.container}>
            <div className={styles.circle} style={{backgroundColor:  shootout ? 'var(--red)' : 'var(--black)'}}></div>
        </div>
    );
};

export default Shootout;
