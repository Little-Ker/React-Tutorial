import React from "react"
import styles from './reduxState.module.sass'

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import CodeResult from '../../component/codeResult/CodeResult'
import Img from '../../component/img/Img'

import TodoListEx from '../../component/test/reduxTest/TodoListView'
import img07 from '../../assets/images/07.gif'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: '安裝 redux', to: '/redux-install'
        },
        next: {
            title: 'Redux - 延遲改資料事件', to: '/redux-asyncState'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function ReduxState() {
    return (
        <div>
            <Title txt="Redux - 取得、改變資料" />
            <div className={styles.reduxState}>
                <SubTitle txt="# Redux 關鍵字" />
                <DotItem txt={'state：存放資料和狀態的地方。是單向流，只可讀不能直接改寫。'} />
                <DotItem txt={'reducer：修改 state 的地方。'} />
                <DotItem txt={'action：若 state 需更新，需透過 action 傳遞 reducer。'} />
                <div className={styles.img}>
                    <Img imgUrl={img07} />
                </div>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# todoList 實作" />
                <DotItem txt={'在 store 註冊好要用的 state 並寫 slice 資料、方法。'} />
                <Code codeUrl="171086ff2be480b11883f81da50c57b0"/>
            </div>
            <div>
                <SubTitle txt="# redux 讀取資料" />
                <DotItem txt={'使用 useSelector 從 store 讀取 state。'} />
                <Code codeUrl="2d39153763863f8a89223182a68d3c96"/>
            </div>
            <div>
                <SubTitle txt="# redux 更新資料" />
                <DotItem txt={'使用 useDispatch 發送 actions 更新事件。'} />
                <Code codeUrl="e1a2f03174b740cbc7fd8d7f2b4fed5b"/>
                <CodeResult code={<TodoListEx />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://penueling.com/%E6%8A%80%E8%A1%93%E7%AD%86%E8%A8%98/react-react-redux-redix-toolkit-%E6%96%B0%E6%89%8B%E6%95%99%E5%AD%B8/" txt="React + React-Redux + Redux-Toolkit 新手教學" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://kaochihyu.coderbridge.io/2021/01/25/how-to-use-redux/" txt="Redux 應用官方教學筆記" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default ReduxState