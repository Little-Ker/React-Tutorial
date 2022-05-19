import React from "react"
import PropTypes from 'prop-types'
import styles from './title.module.sass'

function Title(props) {
    return (
        <div className={styles.title}>
            {props.txt}
        </div>
    )
}

Title.propTypes = {
    txt: PropTypes.string.isRequired
}

export default Title