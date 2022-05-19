import React from "react"
import styles from './subTitle.module.sass'
import PropTypes from 'prop-types'

function SubTitle(props) {
    return (
        <div className={styles.subTitle}>
            {props.txt}
        </div>
    )
}

SubTitle.propTypes = {
    txt: PropTypes.string.isRequired
}

export default SubTitle