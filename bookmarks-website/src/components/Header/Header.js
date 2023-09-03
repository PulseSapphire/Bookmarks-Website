import React from 'react';
import Image from 'next/image';

import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo_container}>

                <Image src='/website_design/logo.png' width={53} height={40} alt='logo image.' />
                <h1>sKYLINKER<span>.us</span></h1>
            </div>
        </header>
    )
}

export default Header;