import React from "react"
import { Link } from "react-router-dom"

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import CodeResult from '../../component/codeResult/CodeResult'

import TodoListEx02 from '../../component/test/reduxTest/TodoAsyncView'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Redux - 取得、改變資料', to: '/redux-state'
        },
        next: {
            title: 'Redux - 使用 Axios 取得資料', to: '/redux-axios'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function ReduxAsyncState() {
    const moveTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <Title txt="Redux - 延遲改資料事件" />
            <div>
                <SubTitle txt="# todoList 延遲更新實作" />
                <DotItem txt={'需使用前一篇文章檔案來做調整。'} />
                <Link to='/redux-state' onClick={() => {moveTop()}} className='goUrlLink'>
                    <div className='arrow'></div>
                    <p className='txt'>React - 取得 / 改變 資料 todoList 檔案</p>
                </Link>
            </div>
            <div>
                <SubTitle txt="# redux 延遲更新資料 寫法" />
                <DotItem txt={'在 Slice 撰寫延遲更新事件。'} />
                <DotItem txt={'使用 useDispatch 發送 actions 延遲更新事件。'} />
                <Code codeUrl="b637890d2b1ef2ad9d12a21c51a1abfa"/>
                <CodeResult code={<TodoListEx02 />} />
            </div>
            <ChooseMenu />
        </div>
    )
}

export default ReduxAsyncState