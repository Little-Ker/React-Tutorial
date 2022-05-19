import React from "react"
import styles from './dotItem.module.sass'
import PropTypes from 'prop-types'

function DotItem(props) {
    return (
        <div className={styles.dotItem}>
            {props.txt}
        </div>
    )
}

DotItem.propTypes = {
    txt: PropTypes.string.isRequired
}

export default DotItem