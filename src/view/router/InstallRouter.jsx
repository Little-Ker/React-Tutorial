import React from "react"

import DotItem from '../../component/dotItem/DotItem'
import Tips from '../../component/tips/Tips'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import Img from '../../component/img/Img'
import Npm from '../../component/npm/Npm'

import img04 from '../../assets/images/04.jpg'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'useRef', to: '/useRef'
        },
        next: {
            title: '巢狀路由', to: '/routerNested'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function InstallRouter() {
    return (
        <div>
            <Title txt="安裝 React Router" />
            <div>
            <SubTitle txt="# 關於 router" />
            <DotItem txt={'專案新增路由的功能。'} />
            </div>
            <div>
                <SubTitle txt="# router 安裝指令" />
                <Npm npmTxt="npm install react-router-dom@6" />
            </div>
            <div>
                <SubTitle txt="# router 環境配置" />
                <Code codeUrl="7f3fd7cf27ee940935fe957b8bf6429a"/>
                <SubTitle txt="# Link 連結" />
                <Tips txt={['Link 須放置在  <Router><Router /> 內, 才有作用。']} />
                <Code codeUrl="9d18fc38b3f60b7d27adc60a9945bb6b"/>
                <div className='imgCenter'>
                   <Img imgUrl={img04} /> 
                </div>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://ithelp.ithome.com.tw/articles/10188245" txt="你要去哪裡：React Router" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default InstallRouter