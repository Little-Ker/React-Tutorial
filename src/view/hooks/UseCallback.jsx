import React, { useState, useCallback } from "react"
import styles from './useCallback.module.sass'

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

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'useEffect', to: '/useEffect'
        },
        next: {
            title: 'useRef', to: '/useRef'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function UseCallbackEx() {
    const [inputAmount, setInputAmount] = useState('2');
    const [count, setCount] = useState(0)

    const changeCount = useCallback((num) => {
        setCount(count + num)
    }, [count])

    return (
        <div className={styles.useCallbackEx}>
            <h2>Calculated: {count}</h2>
            <div className={styles.inputNum}>
                <p>Number:</p>
                <input type='number' value={inputAmount} onChange={(e) => setInputAmount(e.target.value)} />
            </div>
            <div className={styles.countBtn} onClick={() => changeCount(Number(inputAmount))}>Click Add Number</div>
        </div>
    )
}

function UseCallbackEx02() {
    const [dark, setDark] = useState(true)

    const changeBgFn = () => {
        return {
            backgroundColor: dark ? '#2c3e50': '#ecf0f1',
            color: dark ? '#ecf0f1' : '#2c3e50'
        }
    }
    const backgroundStyle = useCallback(() => changeBgFn(),[dark])

    return (
        <div className={styles.useCallbackEx02} style={backgroundStyle()}>
            <h1>useCallback</h1>
            <button className={styles.btn} onClick={() => setDark(!dark)}>Change Background</button>
        </div>
    )
}

function UseCallback() {
    return (
        <div className={styles.install}>
            <Title txt="useCallback" />
            <div>
                <SubTitle txt="# useCallback 介紹" />
                <DotItem txt={'把某個運算的值保存下來, 回傳值可以是物件、陣列、值。'} />
                <DotItem txt={'用於執行速度很慢、變動性不大的狀況時。'} />
                <DotItem txt={'回傳 callBack function, 可以傳參數進去。'} />
            </div>
            <div>
                <SubTitle txt="# useCallback 用法" />
                <Npm npmTxt="import React, { useCallback } from 'react'" />
                <Npm npmTxt="const memoizedCallback = useCallback((param) => Fn(param), [array]);" />
                <DotItem txt={'Fn 放函式。'} />
                <DotItem txt={'array 用於設定控制的參數, 與 uesEffect 一樣。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useCallback 範例" />
                <DotItem txt={'01'} />
                <Code codeUrl="54bad6e10dbed9c80c2ad348cec7b186"/>
                <CodeResult code={<UseCallbackEx />} />
                <DotItem txt={'02'} />
                <Code codeUrl="28339cfcb668cb893b6cfca7d244835a"/>
                <CodeResult code={<UseCallbackEx02 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-memorized-hook-usememo-usecallback-e08a5e1bc9a2" txt="[ React Hook 筆記 ]" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default UseCallback