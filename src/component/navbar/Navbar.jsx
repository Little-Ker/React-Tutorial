import styles from './navbar.module.sass'
import React, { useState, useEffect } from "react"
import { useLocation  } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import clsx from 'clsx'

function Navbar() {
    const navList = useSelector((state) => state.navList).navList
    const [titleIndex, setTitleIndex] = useState(0)

    const moveTop = () => {
        window.scrollTo(0, 0)
    }

    let location = useLocation().pathname.split('/')[1]
    if(location === '' || location === 'React-Personal-Website') location = 'install'

    useEffect(() => {
        navList.forEach((title, titleIndex) => {
            title.content.forEach((item) => {
                const to = item.to.split('/')[0]
                if (to === location) setTitleIndex(titleIndex)
            })
        })
    }, [location])

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
                                className={clsx(styles.subTitle, location === item2.to.split('/')[0] && styles.clickSubTitle)}
                                onClick={() => {moveTop()}}
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