import React from "react"
import PropTypes from 'prop-types'

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
            title: 'Component 與 Prop', to: '/prop'
        },
        next: {
            title: 'prop-types', to: '/prop-types'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function Welcome() {
    const nameObj = {
        name: 'Vivi2'
    }

    return (
        <Name { ...nameObj }/>
    )
}

function Name(props) {
    const { name } = props
    return (
      <h1>Hello, {name}</h1>
    )
}

Name.propTypes = {
    name: PropTypes.string.isRequired
}

function Prop2() {
    return (
        <div>
            <Title txt="屬性展開 {...props}" />
            <p>可以使用展開運算符，傳遞整個物件給 props 對象。</p>
            <div>
                <SubTitle txt="# ...props 範例" />
                <Code codeUrl="e713f915d2c8f667d277c1b34e37d8bf"/>
                <CodeResult code={<Welcome />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://www.jianshu.com/p/796af52527b4" txt="react属性展开{...props}" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Prop2