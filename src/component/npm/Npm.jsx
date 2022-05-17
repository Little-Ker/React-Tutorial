import React, { useState } from "react"
import styles from './npm.module.sass'

function Npm(props) {
    const [isCopy, setIsCopy] = useState(false)
    const myClick = document.getElementById('root');
    myClick.addEventListener('mousedown', e => {
        setIsCopy(false)
    })

    function copyCode() {
        navigator.clipboard.writeText(props.npmTxt)
        .then(() => setIsCopy(true))
    }

    const showCopyTxt = (isCopy) ? <p className={styles.copyOver}>copy over</p> : <p className={styles.copyBtn}>copy</p>
    return (
        <div className={styles.npm} onClick={() => copyCode()}>
            <p>{props.npmTxt}</p>
            {showCopyTxt}
        </div>
    )
}

export default Npm