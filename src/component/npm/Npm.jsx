import React, { useState } from "react"
import styles from './npm.module.sass'
import PropTypes from 'prop-types'

function Npm(props) {
    const [isCopy, setIsCopy] = useState(false)
    const myClick = document.getElementById('root')
    myClick.addEventListener('mousedown', () => {
        setIsCopy(false)
    })

    const copyCode = () => {
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

Npm.propTypes = {
    npmTxt: PropTypes.string.isRequired
}

export default Npm