import React from 'react'

import styles from './Banner.module.css'

import Image from 'next/image'

function Banner() {
    return (
        <div className={styles.banner}>
            <h2>Your favorites <br />
                all in one place...</h2>
            <p>The best and the most customizable bookmark manager on the market.</p>

            <div className={styles.ipad_container}>
                <div className={styles.glow}></div>
                <div className={styles.ipad}>
                    <Image src='/website_design/ipadedges.png' width={978} height={652} alt='Ipad edges.' />
                    <Image src='/website_design/ipadscreen.png' width={918} height={589} alt='Ipad screen.' />
                </div>
            </div>
        </div>
    )
}

export default Banner