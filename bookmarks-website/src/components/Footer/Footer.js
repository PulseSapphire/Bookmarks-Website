import React from 'react'

import styles from './Footer.module.css'

import Image from 'next/image'

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <Image src='/website_design/logo.png' width={53} height={40} alt='logo image.' />
                    <h1>sKYLINKER<span>.us</span></h1>
                </div>

                <div className={styles.footer_sections}>
                    <div className={styles.footer_section}>
                        <h4>Company</h4>

                        <p>About</p>
                        <p>Pricing</p>
                        <p>Contact</p>
                    </div>

                    <div className={styles.footer_section}>
                        <h4>Legal</h4>

                        <p>Terms & Conditions</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
            </div>

            <p>© 2023 SkyLinker. All right reserved.</p>
        </div>
    )
}

export default Footer