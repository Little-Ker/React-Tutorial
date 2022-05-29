import React, { useState, useCallback, useEffect } from 'react'
import styles from './scrollBtn.module.sass'
import clsx from 'clsx'

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'

function ScrollBtn() {
    const [y, setY] = useState(window.scrollY)
    const [showDownBtn, setShowDownBtn] = useState(true)
    const [showUpBtn, setShowUpBtn] = useState(false)

    const showUpBtnFn = () => {
        setShowDownBtn(true)
        setShowUpBtn(false)
    }

    const showDownBtnFn = () => {
        setShowDownBtn(false)
        setShowUpBtn(true)
    }

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget
            const scrollWindow = document.documentElement

            const clientHeight = scrollWindow.clientHeight
            const scrollHeight = scrollWindow.scrollHeight
            const scrollTop = scrollWindow.scrollTop

            if (y > window.scrollY) {
                // console.log("scrolling up")
                showDownBtnFn()
            } else if (y < window.scrollY) {
                // console.log("scrolling down")
                showUpBtnFn()
            }
            setY(window.scrollY)

            const isBottom = (clientHeight + scrollTop >= scrollHeight)
            const isTop = (scrollTop === 0)
            if (isTop) showUpBtnFn()
            if (isBottom) showDownBtnFn()
        }, [y]
    )

    useEffect(() => {
        setY(window.scrollY)
        window.addEventListener("scroll", handleNavigation)

        return () => {
            window.removeEventListener("scroll", handleNavigation)
        }
    }, [handleNavigation])

    const goTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const goBottom = () => {
        const scrollHeight = document.documentElement.scrollHeight
        window.scrollTo({top: scrollHeight, behavior: 'smooth'})
    }

    return (
        <div className={styles.scrollBtn}>
            <div onClick={() => {goTop()}} className={clsx(styles.btn, showUpBtn && styles.showBtn)}>
                <ArrowUpwardIcon className={styles.arrSize} />
            </div>
            <div onClick={() => {goBottom()}} className={clsx(styles.btn, showDownBtn && styles.showBtn)}>
                <ArrowDownwardIcon className={styles.arrSize} />
            </div>
        </div>
    )
}

export default ScrollBtn