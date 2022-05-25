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
import Npm from '../../component/npm/Npm'
import Img from '../../component/img/Img'

import TodoAxiosEx from '../../component/test/reduxTest/TodoAxiosView'
import img08 from '../../assets/images/08.gif'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Redux - 延遲改資料事件', to: '/redux-asyncState'
        },
        next: {
            title: '部屬 git pages', to: '/gitPages'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function ReduxState() {
    return (
        <div>
            <Title txt="Redux - 使用 Axios 取得資料" />
            <div>
                <SubTitle txt="# Redux 關鍵字" />
                <DotItem txt={'createAsyncThunk：接受 Redux 操作類型字符串的函數和應返回 Promise 的回調函數。'} />
                <DotItem txt={'extraReducers：包含 Redux case reducer 函數的對象。並允許除了 createSlice 之外的其他動作。'} />
                <div className={styles.img}>
                    <Img imgUrl={img08} />
                </div>
            </div>
            <Block />
            <Divider />
            <div className={styles.reduxState}>
                <SubTitle txt="# 前置作業" />
                <DotItem txt={'安裝 Axios。'} />
                <Npm npmTxt="npm install axios" />
                <DotItem txt={'準備一份 json 檔。'} />
                <Code codeUrl="e394067b3da7894fbc949864d8e88a67"/>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Axios讀取json檔資料 實作" />
                <DotItem txt={'使用 axios 讀取 json 檔並存入資料。'} />
                <Code codeUrl="a3bc3d59835bd68d0115132c9115bf0f"/>
                <DotItem txt={'使用 useSelector 讀取資料並顯示。'} />
                <Code codeUrl="fae994b4fee9bda72b361146d561a005"/>
                <CodeResult code={<TodoAxiosEx />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://www.freecodecamp.org/news/redux-for-beginners-the-brain-friendly-guide-to-redux/" txt="Redux 初學者 - 學習 Redux 的大腦指南" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://redux-toolkit.js.org/api/createAsyncThunk" txt="createAsyncThunk | Redux 工具包" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://redux-toolkit.js.org/api/createslice#extrareducers" txt="extraReducers | Redux 工具包" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default ReduxState