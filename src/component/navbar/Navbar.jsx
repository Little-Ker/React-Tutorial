import styles from './navbar.module.sass'
import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import clsx from 'clsx'

function Navbar() {
    const navList = useSelector((state) => state.navList).navList
    const [titleIndex, setTitleIndex] = useState(0)
    const [chooseTitleIndex, setChooseTitleIndex] = useState(0)
    const [chooseSubTitleIndex, setChooseSubTitleIndex] = useState(0)

    function clickSubTitle(titleIndex, subIndex) {
        setChooseTitleIndex(titleIndex)
        setChooseSubTitleIndex(subIndex)
    }

    const moveTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.webTitle}>
                <p>React</p>
                <p>技術文件</p>
            </div>
            <div className={styles.linkList}>
            {
                navList.map((item, index) => (
                    <div key={index} className={styles.link}>
                        <p onClick={() => setTitleIndex(index)} className={clsx(styles.title, index === titleIndex && styles.activeTitleShow)}>{item.title}</p>
                        <div className={clsx(styles.subNav, index === titleIndex && styles.activeShow)}>
                            {item.content.map((item2, index2) => (
                                <Link key={index2}
                                className={clsx(styles.subTitle, chooseTitleIndex === index && chooseSubTitleIndex === index2 && styles.clickSubTitle)}
                                onClick={() => {moveTop();clickSubTitle(index, index2)}}
                                to={item2.to}
                                >{item2.txt}</Link>
                            ))}
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Navbar