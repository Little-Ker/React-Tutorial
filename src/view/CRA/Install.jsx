import React from "react"

import Tips from '../../component/tips/Tips'
import SubTitle from '../../component/subTitle/SubTitle'
import Title from '../../component/title/Title'
import Npm from '../../component/npm/Npm'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import Img from '../../component/img/Img'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'

import img0 from '../../assets/images/0.jpg'

function NodeTips() {
    const nodeLink = <Hyperlink linkUrl="https://nodejs.org/zh-tw/download/" txt="Node.js" />
    const tipsTxt = [ '使用 npm 前, 需先確認是否已安裝', nodeLink, '環境。' ]
    
    return (
        <Tips txt={tipsTxt} />
    )
}

function ChooseMenu() {
    const menuList = {
        prev: {
            title: '', to: ''
        },
        next: {
            title: 'sass', to: '/sass'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function Install() {
    return (
        <div>
            <Title txt="安裝 React" />
            <div>
                <SubTitle txt="# 建立 React 新專案" />
                <NodeTips />
                <p>使用指令建立新專案。</p>
                <Npm npmTxt="npx create-react-app my-app" />
                <p>專案建立後, 進入新專案, 並輸入開啟指令。</p>
                <Npm npmTxt="npm start" />
                <p>開啟<Hyperlink linkUrl="http://localhost:3000/" txt="http://localhost:3000/" />網址查看專案畫面。</p>
                <Img imgUrl={img0} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://create-react-app.dev/" txt="Create React App" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Install