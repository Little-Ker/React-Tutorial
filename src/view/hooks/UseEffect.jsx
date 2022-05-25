import React, { useState, useEffect } from "react"
import styles from './useEffect.module.sass'

import DotItem from '../../component/dotItem/DotItem'
import Tips from '../../component/tips/Tips'
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
            title: 'useState', to: '/useState'
        },
        next: {
            title: 'useCallback', to: '/useCallback'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function UseEffectEx() {
    const [count, setCount] = useState(0)
    const [isChange, setIsChange] = useState(false)
    
    useEffect(() => {
        setIsChange(false)
        document.getElementById('useStateId01').textContent = `Title ${count}`
    }, [isChange])

    return (
        <div className={styles.useStateEx}>
            <h1 id="useStateId01">0</h1>
            <p>click {count} times</p>
            <div className={styles.countBtn} onClick={() => setCount(count + 1)}>Click Change Number</div>
            <div className={styles.countBtn} onClick={() => setIsChange(true)}>Click Change Title Number</div>
        </div>
    )
}

function UseEffect() {
    return (
        <div className={styles.install}>
            <Title txt="useEffect" />
            <div>
                <SubTitle txt="# useEffect 介紹" />
                <DotItem txt={'可使用 function component 中的 side effect。'} />
                <DotItem txt={'預設情況下, 每次 render 後都會執行, 包含初次 render 和更新 render。'} />
                <DotItem txt={'可一次使用多個 Effect Hook。'} />
                <Tips txt={['資料 fetch、設定 subscription、手動改變 React component 的 DOM 都是 side effect。']} />
            </div>
            <div>
                <SubTitle txt="# useEffect 用法" />
                <Npm npmTxt="import React, { useEffect } from 'react'" />
                <Npm npmTxt="useEffect(() => { callback }, [array])" />
                <DotItem txt={'callback 為副作用程式碼。'} />
                <DotItem txt={'array 用於設定控制的參數。'} />
                <div className={styles.arrayList}>
                    <p className={styles.txt}>{'1. （預設）陣列參數都不填, 每次 render 後都會執行。'}</p>
                    <Code codeUrl="bae3af8c33faac025ffadbfc18efb942"/>
                    <p className={styles.txt}>{'2. 空陣列 [] , 僅在 mount 和 unmount 時執行。'}</p>
                    <Code codeUrl="f97d3f2ff08cea446512363f7b5de8a3"/>
                    <p className={styles.txt}>{'3. 陣列與參數 [ state ] , 僅在 指定參數 改變時執行。'}</p>
                </div>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useEffect 範例" />
                <Code codeUrl="68e937c410079ece40e393ba506a2d2c"/>
                <CodeResult code={<UseEffectEx />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://zh-hant.reactjs.org/docs/hooks-effect.html" txt="使用 Effect Hook - React" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-%E5%BE%9E%E6%9C%80%E5%9F%BA%E6%9C%AC%E7%9A%84-hook-%E9%96%8B%E5%A7%8B-usestate-useeffect-fee6582d8725#96be" txt="[ React Hook 筆記 ]" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default UseEffect