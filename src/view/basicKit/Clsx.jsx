import React, { useState } from "react"
import styles from './clsx.module.sass'
import clsx from 'clsx'

import DotItem from '../../component/dotItem/DotItem'
import Tips from '../../component/tips/Tips'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Npm from '../../component/npm/Npm'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import CodeResult from '../../component/codeResult/CodeResult'
import Block from '../../component/block/Block'
import Divider from '../../component/divider/Divider'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'eslint', to: '/eslint'
        },
        next: {
            title: 'Component 與 prop', to: '/prop'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function LinkTest() {
    const [chooseIndex, setChooseIndex] = useState(1)
    const linkList = [ 'Home', 'About', 'Work', 'Goal' ]

    return (
        <div className={styles.linkTest}>
            <p>Navbar</p>
            <div className={styles.linkList}>
                {linkList.map((link, index) => (
                    <div key={index} onClick={() => setChooseIndex(index)} className={clsx(styles.link, chooseIndex === index && styles.active) }>{link}</div>
                ))}
            </div>
        </div>
    )
}

function Install() {
    return (
        <div className={styles.install}>
            <Title txt="clsx" />
            <Tips txt={['可以減少使用三元運算的方式撰寫 className。']} />
            <div>
                <SubTitle txt="# clsx 安裝指令" />
                <Npm npmTxt="npm install --save clsx" />
            </div>
             <div>
                <SubTitle txt="# clsx 用法" />
                <DotItem txt="範例 1" />
                <Code codeUrl="02a3a6ad6869984fa744ced2c7e8c320"/>
                <DotItem txt="範例 2" />
                <Code codeUrl="54fe39630c45ee47a2ced0e81c25718b"/>
                <CodeResult code={<LinkTest />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://www.npmjs.com/package/clsx" txt="clsx - npm" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://v4.mui.com/zh/getting-started/faq/#whats-the-clsx-dependency-for" txt="clsx 依赖是用于什么?" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Install