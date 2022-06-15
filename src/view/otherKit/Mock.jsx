import React, { useEffect, useState } from "react"
import axios from 'axios'
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
import Img from '../../component/img/Img'

import "../../mock"
import "../../mockAjax"
import img14 from '../../assets/images/14.jpg'
import clsx from "clsx"

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

function MockEx2() {
    // 儲存要顯示的資料
    const [data, setData] = useState([])
    // 目前選到的 page Index
    const [pageIndex, setPageIndex] = useState(0)
    // 下方選單按鈕陣列
    const [pageListAry, setPageListAry] = useState([])
    // 一個頁面要顯示幾筆資料
    const dataLimit = 10

    const postData = (index) => {
        // 要傳遞的 post 資料
        const param = {
            'pageIndex': index * dataLimit,
            'dataLimit': dataLimit
        }
        axios.post('/api/mockAjax', param).then((response) => {
            setData(response.data.data)
            const pageNum = response.data.recordsTotal / dataLimit
            setPageListAry(Array.from(Array(pageNum).keys()))
        })
    }

    useEffect(() => {
        postData(0)
    }, [])

    return (
        <div className={styles.mockEx2}>
            {data.map((item, index) => (
                <p key={index}>{item.id} : {item.content}</p>
            ))}
            <div className={styles.pageList}>
                {pageListAry.map((page, index) => (
                    <p key={index} className={clsx(pageIndex === page && styles.active)} onClick={() => {postData(page), setPageIndex(page)}}>{page + 1}</p>
                ))}
            </div>
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
                <SubTitle txt="# Mock.js Get 數據範例" />
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
                <SubTitle txt="# Mock.js Post 數據範例" />
                <DotItem txt={'新增 mock.js 建立可傳遞 Post 資料的分頁數據。'} />
                <Code codeUrl="117003e5e06980ddf70dc421c69ebd63"/>
                <DotItem txt={'使用 Axios 傳遞分頁 Post，取得 mock.js 模擬分頁數據。'} />
                <Code codeUrl="0ee797b80f78a7cc6a34d3e3ad7b7642"/>
                <CodeResult code={<MockEx2 />} />
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