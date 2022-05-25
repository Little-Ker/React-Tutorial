import React from "react"

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import Npm from '../../component/npm/Npm'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Router Mode', to: '/routerMode'
        },
        next: {
            title: 'Redux - 取得、改變資料', to: '/redux-state'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function InstallRouter() {
    return (
        <div>
            <Title txt="安裝 React Redux" />
            <div>
                <SubTitle txt="# 關於 redux" />
                <DotItem txt={'Redux 是個全域的狀態管理物件。'} />
            </div>
            <div>
                <SubTitle txt="# redux 安裝流程" />
                <DotItem txt={'創建 store.js，用來放集中處理的資料和方法。'} />
                <DotItem txt={'使用 <Privider> 把整個 App 包起來，讓所有的組件都可以使用到 store 的資料和方法。'} />
                <DotItem txt={'撰寫 slice，裡面會存放 states(資料) 和 reducers(方法)。'} />
                <DotItem txt={'在專案內讀取或更新資料。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# redux 安裝指令" />
                <Npm npmTxt="npm install @reduxjs/toolkit" />
                <Npm npmTxt="npm install redux" />
                <Npm npmTxt="npm install react-redux" />
            </div>
            <div>
                <SubTitle txt="# redux 環境配置" />
                <DotItem txt={'創建 src / store.js 檔。'} />
                <Code codeUrl="c1e4fa3ffcb97678c3d3d0530914cc77"/>
                <DotItem txt={'創建 src / redux / todoSlice.js 檔。'} />
                <Code codeUrl="79eee59dd46934ffd5c92af914e74a8b"/>
                <DotItem txt={'在 src / index.js 加入 <Provider>。'} />
                <Code codeUrl="b6d13b87d964de5f4088e9b1449ab65c"/>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://penueling.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/react-react-redux-redix-toolkit-%E6%96%B0%E6%89%8B%E6%95%99%E5%AD%B8/" txt="React + React-Redux + Redux-Toolkit 新手教學" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default InstallRouter