import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'

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

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'git pages 佈署後 bug 與處理', to: '/gitPagesBug'
        },
        next: {
            title: 'Mock js', to: '/mock'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function AxiosEx() {
    const [data, setData] = React.useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/data/dataList.json`).then((response) => {
            setData(response.data.titleData)
        })
    }, [])

    return (
        <div>
            {data.map((item, index) => (
                <p key={index}>{item.title} : {item.txt}</p>
            ))}
        </div>
    )
}

function Axios() {
    const moveTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <Title txt="Axios" />
            <div>
                <SubTitle txt="# 關於 Axios" />
                <DotItem txt={'可用於執行 HTTP 請求。'} />
            </div>
            <div>
                <SubTitle txt="# Axios 安裝指令" />
                <Npm npmTxt="npm install axios" />
            </div>
            <div>
                <SubTitle txt="# Axios 範例" />
                <Code codeUrl="14bad2903ed8c0efd2e0abf716d4152b"/>
                <CodeResult code={<AxiosEx />} />
                <SubTitle txt="# Redux 使用 Axios 取得資料" />
                <Link to='/redux-axios' onClick={() => {moveTop()}} className='goUrlLink'>
                    <div className='arrow'></div>
                    <p className='txt'>React - 取得 / 改變 資料 todoList 檔案</p>
                </Link>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://www.freecodecamp.org/news/how-to-use-axios-with-react/" txt="如何在 React 中使用 Axios：權威指南 (2021)" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Axios