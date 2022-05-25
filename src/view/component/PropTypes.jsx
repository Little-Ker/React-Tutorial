import React from "react"
import styles from './propTypes.module.sass'

import DotItem from '../../component/dotItem/DotItem'
import Tips from '../../component/tips/Tips'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Npm from '../../component/npm/Npm'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Component 與 Prop', to: '/prop'
        },
        next: {
            title: 'Hook 介紹', to: '/hook'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function Install() {
    return (
        <div className={styles.install}>
            <Title txt="Prop-Types" />
            <Tips txt={['對組件的 props 運行類型做檢查。']} />
            <div>
                <SubTitle txt="# Prop-Types 安裝指令" />
                <Npm npmTxt="npm install --save prop-types" />
            </div>
            <div>
                <SubTitle txt="# Prop-Types 用法" />
                <Code codeUrl="db5398ce7839510c1882ecc97fd1dbe0"/>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# prop 類型列表" />
                <div className={styles.propList}>
                    <DotItem txt="PropTypes.array" />
                    <DotItem txt="PropTypes.bool" />
                    <DotItem txt="PropTypes.func" />
                    <DotItem txt="PropTypes.number" />
                    <DotItem txt="PropTypes.object" />
                    <DotItem txt="PropTypes.string" />
                    <DotItem txt="PropTypes.symbol" />
                </div>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://zh-hant.reactjs.org/docs/typechecking-with-proptypes.html" txt="Typechecking With PropTypes - React" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Install