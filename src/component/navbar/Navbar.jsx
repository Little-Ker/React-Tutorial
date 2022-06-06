import styles from './navbar.module.sass'
import React, { useState, useEffect } from "react"
import { useLocation  } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux'
import { changeClickState, initClickBool } from '../../redux/navListSlice'
import clsx from 'clsx'

function Navbar() {
    const dispatch = useDispatch()
    const clickBool = useSelector((state) => state.navList).clickNavBool
    const navList = useSelector((state) => state.navList).navList
    const [titleIndex, setTitleIndex] = useState(0)

    const moveTop = () => {
        window.scrollTo(0, 0)
    }

    let location = useLocation().pathname.split('/')[1]
    if(location === '' || location === 'React-Personal-Website') location = 'install'

    const setCurrentTitleIndex = () => {
        navList.forEach((title, titleIndex) => {
            title.content.forEach((item) => {
                const to = item.to.split('/')[0]
                if (to === location) setTitleIndex(titleIndex)
            })
        })
    }

    useEffect(() => {
        setCurrentTitleIndex()
    }, [location])

    useEffect(() => {
        // 防止滑動選單時，背景畫面也跟著滑動
        if (clickBool) {
            document.body.style.overflow = 'hidden'
            document.getElementById('navbar').style.overflow = 'auto'
            setCurrentTitleIndex()
        } else {
            document.body.style.overflow = 'auto'
            document.getElementById('navbar').style.overflow = 'hidden'
        }
    }, [clickBool])

    return (
        <div id='navbar' className={clsx(styles.navbar, clickBool && styles.active)}>
            <div onClick={() => dispatch(changeClickState(!clickBool))} className={clsx(styles.navBtn, clickBool && styles.active)}>
                <div className={styles.line}></div>
            </div>
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
                                onClick={() => {moveTop(), dispatch(initClickBool())}}
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