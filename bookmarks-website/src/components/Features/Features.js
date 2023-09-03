import React from 'react'

import styles from './Features.module.css'

function Features() {
    return (
        <div className={styles.features}>
            <div className={styles.feature}>
                <h4>Fully customisable</h4>
                <div></div>
            </div>

            <div className={styles.feature}>
                <h4>Create categories</h4>
                <div></div>
            </div>

            <div className={styles.feature}>
                <h4>Adjust privacy settings</h4>
                <div></div>
            </div>

            <div className={styles.feature}>
                <h4>Built-in photoeditor</h4>
                <div></div>
            </div>
        </div>
    )
}

export default Features