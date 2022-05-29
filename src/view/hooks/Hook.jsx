import React from "react"

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Prop-Types', to: '/prop-types'
        },
        next: {
            title: 'useState', to: '/useState'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function Hook() {
    return (
        <div>
            <Title txt="Hook 介紹" />
            <div>
                <SubTitle txt="# 關於 Hook" />
                <DotItem txt={'React 16.8 中增加的新功能。'} />
                <DotItem txt={'不必寫 class Component 就能使用 state 以及其他 React 的功能。'} />
            </div>
            <div>
                <SubTitle txt="# Hook 規則" />
                <DotItem txt={'只在最上層呼叫 Hook（不能在 for、if 或是巢狀的 function 內呼叫 Hook）。'} />
                <DotItem txt={'只在 React Function 中呼叫 Hook。'} />
                <DotItem txt={'在 class component 裡無法使用。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://zh-hant.reactjs.org/docs/hooks-intro.html" txt="介紹 Hook - React" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Hook