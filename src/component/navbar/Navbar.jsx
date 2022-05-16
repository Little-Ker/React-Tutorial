import styles from './navbar.module.sass'
import React, { useState } from "react"
import clsx from 'clsx'

function Navbar() {
    const [titleIndex, setTitleIndex] = useState(0)
    const [chooseTitleIndex, setChooseTitleIndex] = useState(0)
    const [chooseSubTitleIndex, setChooseSubTitleIndex] = useState(0)

    const navList = [{
        title: 'CRA',
        content: [
            '安裝 node.js', '安裝 React'
        ]
    },{
        title: '基礎套件',
        content: [
            'sass', 'prop-types', 'eslint', 'clsx'
        ]
    },{
        title: 'Component',
        content: [
            'prop', 'state'
        ]
    },{
        title: 'Hooks',
        content: [
            'useState', 'useEffect', 'useCallback'
        ]
    },{
        title: 'router',
        content: [
            '安裝指令', '環境調整', 'HashRouter'
        ]
    },{
        title: 'redux',
        content: [
            '安裝指令', '環境調整', '取得資料', '改變資料事件', '延遲改資料事件', '使用 Axios 取得資料'
        ]
    },{
        title: '部屬 git pages',
        content: [
            '部屬方法', 'bug 與處理'
        ]
    },{
        title: '額外套件',
        content: [
            'Axios', 'Mock js', 'Material UI', 'Swiper', 'Google Font'
        ]
    }]

    function clickSubTitle(titleIndex, subIndex) {
        setChooseTitleIndex(titleIndex)
        setChooseSubTitleIndex(subIndex)
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
                            {
                                item.content.map((item2, index2) => (
                                    <p key={index2} onClick={() => clickSubTitle(index, index2)} className={clsx(styles.subTitle, chooseTitleIndex === index && chooseSubTitleIndex === index2 && styles.clickSubTitle)}>{item2}</p>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Navbar