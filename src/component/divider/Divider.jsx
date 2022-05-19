import React from "react"
import styles from './divider.module.sass'

function Divider() {
    return (
        <div className={styles.divider}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    )
}

export default Divider