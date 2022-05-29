import React from "react"
import { Link, Outlet  } from "react-router-dom"

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
            title: '安裝 router', to: '/router'
        },
        next: {
            title: 'Router Hook', to: '/router-hook/123'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function RouterNestedEx01() {
    return (
        <div className='text-center'>
            <Outlet />
            <div className="linkList">
                <Link to="" className="link">Url - Reset</Link>
                <Link to="A" className="link">Nested Link - A</Link>
                <Link to="B" className="link">Nested Link - B</Link>
            </div>
            <p>（網址改變）</p>
        </div>
    )
}

function RouterNested() {
    return (
        <div>
            <Title txt="巢狀路由" />
            <div>
                <SubTitle txt="# 關於巢狀路由" />
                <DotItem txt={'網頁的某一部分保持不變，只有網頁的子部分發生變化。'} />
            </div>
            <div>
                <SubTitle txt="# 巢狀路由配置" />
                <Tips txt={["此為 React Router v6 版本寫法 !!!"]} />
                <DotItem txt={'在 <Route><Route /> 內配置子路由路徑。'} />
                <DotItem txt={' <Outlet /> 為呈現匹配子元素畫面。'} />
                <Code codeUrl="79c7029bf2ff1146ec68df967b422949"/>
                <CodeResult code={<RouterNestedEx01 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://wellbay.cc/thread-2125724.htm" txt="React Router v6 使用指南" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default RouterNested