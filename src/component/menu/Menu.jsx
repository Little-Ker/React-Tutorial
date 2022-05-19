import React from "react"
import styles from './menu.module.sass'
import clsx from 'clsx'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function Menu(props) {
    const { data } = props
    const preData = data.prev
    const nextData = data.next

    const moveTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.menu}>
            <Link to={preData.to} onClick={() => {moveTop()}} className={clsx(styles.btn, preData.title === '' && styles.btnHide)}>
                <div className={styles.arrow}>
                    <p>Prev</p>
                </div>
                <p className={styles.txt}>{preData.title}</p>
            </Link>
            <Link to={nextData.to} onClick={() => {moveTop()}} className={clsx(styles.btn, styles.rightBtn, nextData.title === '' && styles.btnHide)}>
                <div className={styles.arrow}>
                    <p>Next</p>
                </div>
                <p className={styles.txt}>{nextData.title}</p>
            </Link>
        </div>
    )
}

Menu.propTypes = {
    data: PropTypes.object.isRequired
}

export default Menu