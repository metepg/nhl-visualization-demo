import React from 'react';
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav style={{marginBottom: '40px'}}>
            <div className={styles.navbar}>
                <p className={styles.topRight}>VISUALIZINGNHL.COM</p>
            </div>
            <hr className={styles.hr} />
        </nav>
    );
};

export default Navbar;
