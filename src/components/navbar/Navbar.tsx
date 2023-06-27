import React from 'react';
import styles from './Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <div style={{marginBottom: '40px'}}>
            <nav className={styles.navbar}>
                <p className={styles.topRight} >VISUALIZINGNHL.COM</p>
            </nav>
            <hr className={styles.hr} />
        </div>
    );
};

export default Navbar;
