import React from "react"
import styles from './materialUI.module.sass'

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import Npm from '../../component/npm/Npm'
import CodeResult from '../../component/codeResult/CodeResult'

import "../../mock"
import useStore from "../../zustand/useStore"

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Mock.js', to: '/mock'
        },
        next: {
            title: 'Material UI', to: '/materialUI'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function ZustandEx() {
    const { count, add } = useStore()

    return (
        <div>
            <p style={{'marginBottom': '10px', 'textAlign': 'center'}}>{count}</p>
            <div className={`btn ${styles.btn}`} onClick={() => add()}>Add</div>
        </div>
    )
}

function ZustandEx02() {
    const { fetch, list } = useStore()

    return (
        <div>
            <div>
                {list.map((item, index) => (
                    <p style={{'textAlign': 'center'}} key={index}>{item.id} : {item.name}</p>
                ))}
            </div>
            <div className={`btn ${styles.btn}`} style={{'marginTop': '20px'}} onClick={() => fetch('/api/mockTestList')}>fetch</div>
        </div>
    )
}

function Mock() {
    return (
        <div>
            <Title txt="Zustand" />
            <div>
                <SubTitle txt="# 關於 Zustand" />
                <DotItem txt={'透過 hook 的方式，製作狀態管理。'} />
            </div>
            <div>
                <SubTitle txt="# Zustand 安裝指令" />
                <Npm npmTxt="npm install zustand" />
            </div>
            <div>
                <SubTitle txt="# Zustand 同步讀改資料" />
                <DotItem txt={'新增 useStore.js 管理狀態。'} />
                <Code codeUrl="7c59d0b11915d38df3fff88df51ea8b0"/>
                <DotItem txt={'在其他 component 可直接取用 useStore.js 的參數和方法。'} />
                <Code codeUrl="5fd2ab1d8bd9a2b9c76f80f02aa07049"/>
                <CodeResult code={<ZustandEx />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Zustand 異步讀取資料" />
                <DotItem txt={'在 useStore.js 新增參數、異步方法。'} />
                <Code codeUrl="5fd1841d02f4e9b05bbe335582b7ce3a"/>
                <DotItem txt={'在其他 component 可直接取用 useStore.js 的參數和方法。'} />
                <Code codeUrl="a97bdd767f5ae24105538343bd163d77"/>
                <CodeResult code={<ZustandEx02 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://blog.yyisyou.tw/1059000a/" txt="zustand - 基於Flux與hook實現狀態管理" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Mock