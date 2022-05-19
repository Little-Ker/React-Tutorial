import React from "react"
import styles from './codeResult.module.sass'

function CodeResult(prop) {
    return (
        <div className={styles.codeResult}>
            <p className={styles.result}>程式碼結果</p>
            {prop.code}
        </div>
    )
}

export default CodeResult