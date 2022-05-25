import React from "react"
import styles from './sass.module.sass'

import Tips from '../../component/tips/Tips'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Npm from '../../component/npm/Npm'
import DotItem from '../../component/dotItem/DotItem'
import Img from '../../component/img/Img'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'

import img01 from '../../assets/images/01.jpg'

function ModuleTips() {
    const tipsTxt = [ '.module.sass 模組化, 避免重複的 styles 命名。' ]
    
    return (
        <Tips txt={tipsTxt} />
    )
}

function ChooseMenu() {
    const menuList = {
        prev: {
            title: '安裝 React', to: '/install'
        },
        next: {
            title: 'eslint', to: '/eslint'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function SassFold() {
    return (
        <div className={styles.sassFold}>
            <div>
                <DotItem txt="在 src 建立 styles 資料夾 " />
                <div className={styles.foldList}>
                    <DotItem txt="all.sass" />
                    <DotItem txt="main.sass" />
                    <DotItem txt="reset.sass" />
                    <DotItem txt="variable.sass" />
                </div>
            </div>
            <div className={styles.foldImg}>
                <Img imgUrl={img01} />
            </div>
        </div>
    )
}

function Install() {
    return (
        <div className={styles.install}>
            <Title txt="Sass" />
            <div>
                <SubTitle txt="# Sass 安裝指令" />
                <Npm npmTxt="npm install sass" />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Sass 基本語法" />
                <ModuleTips />
                <DotItem txt="$variable 變數用法" />
                <Code codeUrl="3630012636f6d9fe1604ed6f64db8927"/>
                <DotItem txt="Mixins 方法用法" />
                <Code codeUrl="fe704ea158bc907fc16ad6fd98da785b"/>
                <DotItem txt="RWD 用法" />
                <Code codeUrl="594bcc7e8aa02b44e55b0565eee41d47"/>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 全局 Sass 環境配置" />
                <SassFold />
                <DotItem txt="在 src / index.js 引入全局 Sass" />
                <Npm npmTxt="import './style/all.sass" />
                <Code codeUrl="994a672bb5b652f5092ebc2b2fea5023"/>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Sass 檔程式碼" />
                <DotItem txt="all.sass" />
                <Code codeUrl="b9008830c67fdc8808700937ccf503f0"/>
                <DotItem txt="variable.sass" />
                <Code codeUrl="95c8a6b4c32f9adf62e0fd52d29569ff"/>
                <DotItem txt="main.sass" />
                <Code codeUrl="17ef785d2bf48a9b105278f646918bbf"/>
                <DotItem txt="reset.sass" />
                <Code codeUrl="4d483a14ebe42ef71612b889d0a7ab0f"/>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://sass-lang.com/dart-sass" txt="Sass: Dart Sass" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://create-react-app.dev/docs/adding-a-sass-stylesheet/" txt="Adding a Sass Stylesheet | Create React App" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Install