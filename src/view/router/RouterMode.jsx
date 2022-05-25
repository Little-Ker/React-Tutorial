import React from "react"

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Router Hook', to: '/router-hook/123'
        },
        next: {
            title: '安裝 redux', to: '/redux-install'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function RouterMode() {
    return (
        <div>
            <Title txt="Router Mode" />
            <div>
                <SubTitle txt="# BrowserRouter" />
                <DotItem txt={'server 必須要有對應的 response。'} />
                <DotItem txt={'刷新頁面會導致瀏覽器向服務器發送 GET 請求。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# HashRouter" />
                <DotItem txt={'改變 url 且不讓瀏覽器向伺服器傳送請求。'} />
                <DotItem txt={'在 url 後加上"#"，如 http://127.0.0.1:5500/home/#/page1'} />
                <DotItem txt={'使用範例：SPA 單頁式網頁'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://ithelp.ithome.com.tw/articles/10226056" txt="【React.js入門 - 27】 我要更多更多的分頁 - react-router-dom (上)" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react" txt="React 中的 HashRouter 和 BrowserRouter 有什麼區別？" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default RouterMode