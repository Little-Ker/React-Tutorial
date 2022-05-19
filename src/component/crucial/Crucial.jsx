import React from "react"
import styles from './crucial.module.sass'
import PropTypes from 'prop-types'

function Crucial(props) {
    return (
        <span className={styles.crucial}>{props.txt}</span>
    )
}

Crucial.propTypes = {
    txt: PropTypes.string.isRequired
}

export default Crucial