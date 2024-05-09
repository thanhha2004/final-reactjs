import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./style.module.css"

const Header = () => {
    return (
        <div className={styles['root-header']}>
            <div style={{ flex: 2, textAlign: 'left', display: "flex", gap: 10 }}>
                <Link style={{ textDecoration: "none" }} to="/"><span>Home</span></Link>
                <Link style={{ textDecoration: "none" }} to="/shop"><span>Shop</span></Link>
            </div>
            <div style={{ flex: 1 }}>
                APPLE STORE
            </div>
            <div style={{ flex: 2, textAlign: 'right' }}>
                login
            </div>
        </div>
    )
}

export default Header