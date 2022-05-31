import React from "react"
import PropTypes from 'prop-types'

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

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'clsx', to: '/clsx'
        },
        next: {
            title: '屬性展開 {...props}', to: '/prop2'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function Welcome(props) {
    return (
      <h1>Hello, {props.name}</h1>
    )
}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

function Prop() {
    return (
        <div>
            <Title txt="Component 與 Prop" />
            <p> component 就像是 JavaScript 的 function, 可以接收任意的參數（props）。</p>
            <Tips txt={['Component 的字首須為大寫字母。']} />
            <div>
                <SubTitle txt="# Function Component" />
                <Code codeUrl="d3f1fb96cdc1134d5a483fa5dffae141"/>
                <CodeResult code={<Welcome name="Vivi" />} />
                <DotItem txt={'以 {name: "Vivi"} 作為 props 傳入 Welcome component。'} />
                <DotItem txt={' Welcome component 回傳了 <h1>Hello, Vivi</h1> 這個 element 作為返回值。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://zh-hant.reactjs.org/docs/components-and-props.html" txt="Components 與 Props - React" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Prop