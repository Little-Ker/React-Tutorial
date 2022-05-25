import styles from './eslint.module.sass'
import React from "react"

import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Npm from '../../component/npm/Npm'
import Img from '../../component/img/Img'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Block from '../../component/block/Block'
import Divider from '../../component/divider/Divider'
import Hyperlink from '../../component/hyperlink/Hyperlink'

import img02 from '../../assets/images/02.jpg'
import img03 from '../../assets/images/03.jpg'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'sass', to: '/sass'
        },
        next: {
            title: 'clsx', to: '/clsx'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function Eslint() {
    return (
        <div className={styles.install}>
            <Title txt="Eslint" />
            <div>
                <SubTitle txt="# Eslint 安裝指令" />
                <Npm npmTxt="npm install eslint --save-dev" />
                <Block />
                <SubTitle txt="# 建立 EsLint 設定檔" />
                <Npm npmTxt="eslint --init" />
                <p className={styles.txt}> ESLint 會詢問幾個問題, 並產生出設定檔：</p>
                <div className={styles.problemList}>
                    <p className={styles.txt}> 1. 想使用 ESLint 來做什麼？</p>
                    <p className={styles.txt}> 2. 專案使用的程式語言？</p>
                    <p className={styles.txt}> 3. 專案使用哪個 modules？</p>
                    <p className={styles.txt}> 4. 專案是否使用 TypeScript？</p>
                    <p className={styles.txt}> 5. 在哪個執行環境下使用？</p>
                    <p className={styles.txt}> 6. 產生的 config 檔要用哪種格式？</p>
                    <Img imgUrl={img02} />
                </div>
            </div>
            <Block />
            <div>
                <SubTitle txt="# EsLint 指令設定" />
                <p className={styles.txt}> 在 package.json 加上指令語法。</p>
                <Code codeUrl="e4fd41ddab8ea9619f1d5bab0d6a161e"/>
                <p className={styles.txt}> 在 .eslintrc.json 加上檢查語法。</p>
                <p className={styles.txt}> Ex 尾端分號檢查</p>
                <Code codeUrl="324e236dfb1b9499c557e51ccbca733f"/>
            </div>
            <Block />
            <div>
                <SubTitle txt="# 可執行 語法檢查 指令" />
                <Npm npmTxt="npm run lint" />
                <Img imgUrl={img03} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://eslint.org/" txt="ESlint - Pluggable JAvaScript linter" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://ithelp.ithome.com.tw/articles/10215259" txt="Day02 | 整齊的程式, 讓看的人長命百歲, 給我用 ESLint" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Eslint