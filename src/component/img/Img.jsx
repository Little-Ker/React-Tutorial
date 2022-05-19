import styles from './img.module.sass'
import React from "react"
import PropTypes from 'prop-types'

function Img(props) {
    return (
        <div className={styles.img}>
            <img src={props.imgUrl} alt="" />
        </div>
    )
}

Img.propTypes = {
    imgUrl: PropTypes.string.isRequired
}

export default Img