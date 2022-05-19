import React from "react"
import PropTypes from 'prop-types'
import styles from './tips.module.sass'

function Tips(props) {
    return (
        <div className={styles.tips}>
            {props.txt.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </div>
    )
}

Tips.propTypes = {
    txt: PropTypes.array.isRequired
}

export default Tips