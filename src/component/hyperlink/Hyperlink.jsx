import React from "react"
import styles from './hyperlink.module.sass'
import PropTypes from 'prop-types'

function Hyperlink(props) {
    return (
        <a className={styles.hyperlink} href={props.linkUrl} target="_blank" rel="noreferrer">{props.txt}</a>
    )
}

Hyperlink.propTypes = {
    linkUrl: PropTypes.string.isRequired,
    txt: PropTypes.string.isRequired
}

export default Hyperlink