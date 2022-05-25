import React, { useState } from "react"
import styles from './useState.module.sass'

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
            title: 'Hook 介紹', to: '/hook'
        },
        next: {
            title: 'useEffect', to: '/useEffect'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function UseStateEx() {
    const [count, setCount] = useState(0)

    return (
        <div className={styles.useStateEx}>
            <h1>{count}</h1>
            <div className={styles.countBtn} onClick={() => setCount(count + 1)}>Click</div>
        </div>
    )
}

function UseStateEx02() {
    const [inputValue, setInputValue] = useState('test')

    return (
        <div className={styles.useStateEx02}>
            <h1>{inputValue}</h1>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
    )
}

function UseStateEx03() {
    const [title, setTitle] = useState('A')
    const changeTitle = (title) => () => {
      setTitle(title)
    }

    return (
        <div className={styles.useStateEx03}>
            <h1>{title}</h1>
            <div className={styles.list}>
                <div className={`btn ${styles.btn}`} onClick={changeTitle('A')}>A</div>
                <div className={`btn ${styles.btn}`} onClick={changeTitle('B')}>B</div>
                <div className={`btn ${styles.btn}`} onClick={changeTitle('C')}>C</div>
            </div>
        </div>
    )
}

function UseState() {
    return (
        <div>
            <Title txt="useState" />
            <div>
                <SubTitle txt="# useState 介紹" />
                <DotItem txt={'元件狀態管理。'} />
                <DotItem txt={'可一次使用多個 State Hook。'} />
            </div>
            <div>
                <SubTitle txt="# useState 用法" />
                <Npm npmTxt="import React, { useState } from 'react'" />
                <Npm npmTxt="const [state, setState] = useState(initialState)" />
                <DotItem txt={'state 為設置的變數。'} />
                <DotItem txt={'setState 為更新 state 的方法。'} />
                <DotItem txt={'initialState 為初始的 state。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useState 範例" />
                <DotItem txt={'01'} />
                <Code codeUrl="a6885bcbfe3d3337efebf3a217f645b4"/>
                <CodeResult code={<UseStateEx />} />
                <DotItem txt={'02'} />
                <Code codeUrl="0c2cab1119f0ae18c9ed2a386ea42031"/>
                <CodeResult code={<UseStateEx02 />} />
                <DotItem txt={'03'} />
                <Code codeUrl="52871d5a79b8df3e17072e4ef17c59d5"/>
                <CodeResult code={<UseStateEx03 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://zh-hant.reactjs.org/docs/hooks-state.html" txt="使用 State Hook - React" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-%E5%BE%9E%E6%9C%80%E5%9F%BA%E6%9C%AC%E7%9A%84-hook-%E9%96%8B%E5%A7%8B-usestate-useeffect-fee6582d8725#96be" txt="[ React Hook 筆記 ]" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default UseState