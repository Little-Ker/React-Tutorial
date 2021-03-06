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
            title: 'useContext', to: '/useContext'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function UseCallbackEx() {
    const [inputAmount, setInputAmount] = useState('2')
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
            <div className={styles.btn} onClick={() => setDark(!dark)}>Change Background</div>
        </div>
    )
}

function UseCallback() {
    return (
        <div className={styles.install}>
            <Title txt="useCallback" />
            <div>
                <SubTitle txt="# useCallback ??????" />
                <DotItem txt={'?????????????????????????????????, ??????????????????????????????????????????'} />
                <DotItem txt={'?????????????????????????????????????????????????????????'} />
                <DotItem txt={'?????? callBack function, ????????????????????????'} />
            </div>
            <div>
                <SubTitle txt="# useCallback ??????" />
                <Npm npmTxt="import React, { useCallback } from 'react'" />
                <Npm npmTxt="const memoizedCallback = useCallback((param) => Fn(param), [array]);" />
                <DotItem txt={'Fn ????????????'} />
                <DotItem txt={'array ???????????????????????????, ??? uesEffect ?????????'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useCallback ??????" />
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
                <SubTitle txt="# ????????????" />
                <div>
                    <Hyperlink linkUrl="https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-memorized-hook-usememo-usecallback-e08a5e1bc9a2" txt="[ React Hook ?????? ]" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default UseCallback