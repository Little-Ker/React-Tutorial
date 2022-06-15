import React, { useEffect } from "react"
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
import Img from '../../component/img/Img'

import "../../mock"
import img14 from '../../assets/images/14.jpg'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Axios', to: '/axios'
        },
        next: {
            title: 'Zustand', to: '/zustand'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function MockEx() {
    const [data, setData] = React.useState([])

    useEffect(() => {
        axios.get('/api/mockTestList').then((response) => {
            console.log('response.data',response.data)
            setData(response.data.dataList)
        })
    }, [])

    return (
        <div>
            {data.map((item, index) => (
                <p key={index}>{item.name} : {item.price}</p>
            ))}
        </div>
    )
}

function Mock() {
    return (
        <div>
            <Title txt="Mock.js" />
            <div>
                <SubTitle txt="# 關於 Mock.js" />
                <DotItem txt={'根據數據模板生成模擬數據。'} />
                <DotItem txt={'模擬 Ajax 請求，生成並返回模擬數據。'} />
            </div>
            <div>
                <SubTitle txt="# Mock.js 安裝指令" />
                <Npm npmTxt="npm install mockjs" />
            </div>
            <div>
                <SubTitle txt="# Mock.js 範例" />
                <DotItem txt={'新增 mock.js 建立模擬數據。'} />
                <Code codeUrl="b4f2355095b2bfb3f4c4a8009b428ec0"/>
                <Img imgUrl={img14} />
                <DotItem txt={'使用 Axios 取得 mock.js 模擬數據。'} />
                <Code codeUrl="b0ebdd2d1c8343fff85e82de799d6e05"/>
                <CodeResult code={<MockEx />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://github.com/nuysoft/Mock/wiki/Getting-Started" txt="Getting Started nuysoft/Mock" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/728093/" txt="mock.js那點事(上)" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default Mock