import styles from './navbar.module.sass'
import React, { useState } from "react"
import { Link } from "react-router-dom"
import clsx from 'clsx'

const navList2 = [{
    title: 'CRA',
    content: [{
        txt: '安裝 React', to: 'install'
    }]
},{
    title: '基礎套件',
    content: [{
        txt: 'sass', to: 'sass'
    },{
        txt: 'eslint', to: 'eslint'
    },{
        txt: 'clsx', to: 'clsx'
    }]
},{
    title: 'Component',
    content: [{
        txt: 'Component 與 prop', to: 'prop'
    },{
        txt: 'prop-types', to: 'prop-types'
    }]
},{
    title: 'Hooks',
    content: [{
        txt: 'Hook 介紹', to: 'hook'
    },{
        txt: 'useState', to: 'useState'
    },{
        txt: 'useEffect', to: 'useEffect'
    },{
        txt: 'useCallback', to: 'useCallback'
    },{
        txt: 'useRef', to: 'useRef'
    }]
},{
    title: 'router',
    content: [{
        txt: '安裝 router', to: 'router'
    },{
        txt: '巢狀路由', to: 'routerNested'
    },{
        txt: 'Router Hook', to: 'router-hook/123'
    },{
        txt: 'Router Mode', to: 'routerMode'
    }]
},{
    title: 'redux',
    content: [{
        txt: '安裝 redux', to: 'redux-install'
    },{
        txt: '取得 / 改變 資料', to: 'redux-state'
    },{
        txt: '延遲改資料事件', to: 'redux-asyncState'
    },{
        txt: '使用 Axios 取得資料', to: 'redux-axios'
    }]
},{
    title: '部屬 git pages',
    content: [{
        txt: '部屬方法', to: 'gitPages'
    },{
        txt: 'bug 與處理', to: 'gitPagesBug'
    }]
},{
    title: '額外套件',
    content: [{
        txt: 'Axios', to: 'axios'
    },{
        txt: 'Mock js', to: 'mock'
    },{
        txt: 'Material UI', to: 'materialUI'
    },{
        txt: 'Swiper', to: 'swiper'
    },{
        txt: 'Google Font',  to: 'googleFont'
    }]
}]

function Navbar() {
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
                navList2.map((item, index) => (
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