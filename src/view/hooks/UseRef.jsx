import React, { useState, useRef } from "react"
import styles from './useRef.module.sass'

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import CodeResult from '../../component/codeResult/CodeResult'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'useCallback', to: '/useCallback'
        },
        next: {
            title: 'useContext', to: '/useContext'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

// useRef 綁定 input 與 下拉式選單
function UseRefEx() {
    const [inputAccTxt, setInputAccTxt] = useState('')
    const [inputPassTxt, setInputPassTxt] = useState('')
    const [selectChooseTxt, setSelectChooseTxt] = useState('Choose')

    const inputAcc = useRef('null')
    const inputPass = useRef('null')
    const selectChoose = useRef('Choose')

    // 建立一個 array 來管理這些 ref
    const refArr = useRef([inputAcc, inputPass, selectChoose])

    return (
        <div className={styles.useRefEx}>
            <h2>{`帳號：${inputAccTxt}`}</h2>
            <h2>{`密碼：${inputPassTxt}`}</h2>
            <h2>{`Choose：${selectChooseTxt}`}</h2>
            <div className={styles.inputList}>
                帳號：<input type='text' name="acc" ref={inputAcc} />
                密碼：<input type='text' name="pass" ref={inputPass} />
            </div>
            <div className={styles.chooseList}>
                <p>Choose：</p>
                <select ref={selectChoose} name="choose">
                    <option>Choose</option>
                    <option value={'A'}>A</option>
                    <option value={'B'}>B</option>
                    <option value={'C'}>C</option>
                </select>
            </div>
            <div className={styles.btn} onClick={()=>{
                refArr.current.forEach((item)=>{
                    const name = item.current.name
                    const value = item.current.value
                    if (name === 'acc') {
                        setInputAccTxt(value)
                    } else if (name === 'pass') {
                        setInputPassTxt(value)
                    } else {
                        setSelectChooseTxt(value)
                    }
                })
            }}>提交</div>
        </div>
    )
}

function UseRef() {
    return (
        <div>
            <Title txt="非控制組件 - useRef" />
            <div>
                <SubTitle txt="# useRef 介紹" />
                <DotItem txt={'取得表單中欄位的值, 或是直接操作 DOM。'} />
                <DotItem txt={'直接在 JSX 中取得 DOM 元素, 並控制元素的行為。'} />
                <DotItem txt={'回傳的是一個物件, 裡面只有一個 current 屬性。'} />
            </div>
            <div>
                <SubTitle txt="# useRef 用法" />
                <Code codeUrl="1a97c4d30cebd1bda0f421fb8f48566e"/>
                <DotItem txt={'{ current: "初始資料" }。'} />
                <DotItem txt={'變數名稱.current就會是該input元素本身。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useRef 範例" />
                <Code codeUrl="394c5b4d7e1f047bf1ee97a242fe7440"/>
                <CodeResult code={<UseRefEx />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://ithelp.ithome.com.tw/articles/10246939" txt="【Day.15】React入門 - 非控制組件與useRef" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default UseRef