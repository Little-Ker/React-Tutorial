import React, { useState } from 'react'
import UseContextContent from '../../component/test/hooks/UseContextContent'
import styles from './useContext.module.sass'

import Img from '../../component/img/Img'
import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import CodeResult from '../../component/codeResult/CodeResult'

import img17 from '../../assets/images/17.jpg'

export const ThemeContext = React.createContext()

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'useCallback', to: '/useCallback'
        },
        next: {
            title: 'useRef', to: '/useRef'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

const UseContextEx = () => {
    const [dark, setDark] = useState(true)

    const changeTheme = () => {
        setDark(prevDark => !prevDark)
    }
      
    return (
        <ThemeContext.Provider value={dark}>
            <button onClick={changeTheme}>Change Theme</button>
            <ComponentA />
        </ThemeContext.Provider>
    )
}

const ComponentA = () => {
    return (
        <div className={styles.bg}>
            <UseContextContent />
        </div>
    )
}

function UseContext() {
    return (
        <div>
            <Title txt="Context" />
            <div>
                <SubTitle txt="# Context 介紹" />
                <DotItem txt={'可以將資料傳到直接傳送到需要的元件，而不需要手動一直透過 props 傳入。'} />
                <Img imgUrl={img17} />
            </div>
            <div>
                <SubTitle txt="# Context 用法" />
                <DotItem txt={'使用 Context.Provider 包覆元件，先將資料透過 value 傳遞給 Provider，Provider 再將資料傳給裡面的元件。'} />
                <DotItem txt={'Provider: 傳遞 value 值。'} />
                <DotItem txt={'useContext: 接收 value 值。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useContext 範例" />
                <Code codeUrl="a8bcbdea6381da94a6f3dd1ef228bbf7"/>
                <CodeResult code={<UseContextEx />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-usecontext-4bc289976847" txt="[ React Hook 筆記 ]" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default UseContext