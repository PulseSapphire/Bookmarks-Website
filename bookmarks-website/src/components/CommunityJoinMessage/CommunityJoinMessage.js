import React from 'react'

import styles from './CommunityJoinMessage.module.css'

import Image from 'next/image'


function CommunityJoinMessage() {
    return (
        <div className={styles.container}>
            <div className={styles.sub_container}>
                <Image src='/website_design/person.png' width={416} height={374} alt='person.' />
                <h2>Be a part of our great community!</h2>
                <button>Join Today</button>
            </div>
        </div>
    )
}

export default CommunityJoinMessage;