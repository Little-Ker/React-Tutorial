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

import MaterialUIEx01 from '../../component/test/materialUITest/TimelineTest'
import MaterialUIEx02 from '../../component/test/materialUITest/SxStyleTest'
import MaterialUIEx03 from '../../component/test/materialUITest/CheckboxTest'
import MaterialUIEx04 from '../../component/test/materialUITest/MediaQueryTest'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Mock.js', to: '/mock'
        },
        next: {
            title: 'Swiper', to: '/swiper'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function MaterialUI() {
    return (
        <div className={styles.materialUI}>
            <Title txt="Material UI" />
            <div>
                <SubTitle txt="# 關於 Material UI" />
                <DotItem txt={'提供畫面的組件(component) ex. Button, Input, Dialog ...'} />
                <div className={styles.dot}>
                    <Hyperlink linkUrl="https://mui.com/" txt="Material UI 官網" />
                </div>
                <div className={styles.dot}>
                    <Hyperlink linkUrl="https://mui.com/zh/material-ui/material-icons/" txt="Material UI icons" />
                </div>
            </div>
            <div>
                <SubTitle txt="# Material UI 安裝指令" />
                <Npm npmTxt="npm install @mui/material @emotion/react @emotion/styled" />
                <Npm npmTxt="npm install @mui/icons-material" />
                <Npm npmTxt="npm install @mui/lab" />
            </div>
            <div>
                <SubTitle txt="# Material UI Components 使用" />
                <DotItem txt={'Timeline 時間軸 與 icon'} />
                <div className={styles.dot}>
                    <Hyperlink linkUrl="https://mui.com/zh/material-ui/react-timeline/" txt="React Timeline (時間軸) 組件" />
                </div>
                <Code codeUrl="bdad1352d1f4ad79f191e7ad020ce843"/>
                <CodeResult code={<MaterialUIEx01 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# sx 自定義組件樣式" />
                <DotItem txt={'自定義主題色'} />
                <div className={styles.dot}>
                    <Hyperlink linkUrl="https://mui.com/zh/system/the-sx-prop/" txt="sx - Material UI" />
                </div>
                <Code codeUrl="e47e1c9f44814831b68a6162acdd9d8b"/>
                <CodeResult code={<MaterialUIEx02 />} />
            </div>
            <div>
                <SubTitle txt="# Theming 主題" />
                <DotItem txt={'自定義主題色'} />
                <div className={styles.dot}>
                    <Hyperlink linkUrl="https://mui.com/zh/material-ui/customization/theming/" txt="Theming 主題 - Material UI" />
                </div>
                <div className={styles.dot}>
                    <Hyperlink linkUrl="https://mui.com/zh/system/palette/" txt="Palette 調色盤 - Material UI" />
                </div>
                <Code codeUrl="bbee6a4ff702730a4e834941ee715ed4"/>
                <CodeResult code={<MaterialUIEx03 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Breakpoints 斷點" />
                <DotItem txt={'默認斷點'} />
                <div className={styles.dot}>
                    <DotItem txt={'xs 超小：0px'} />
                    <DotItem txt={'sm 小：600px'} />
                    <DotItem txt={'md 中：900px'} />
                    <DotItem txt={'lg 大：1200px'} />
                    <DotItem txt={'xl 特大號：1536px'} />
                </div>
                <DotItem txt={'根據畫面寬度，更改背景顏色。'} />
                <div className={styles.dot}>
                    <Hyperlink linkUrl="https://mui.com/zh/material-ui/customization/breakpoints/#theme-breakpoints-up-key-media-query" txt="Breakpoints 斷點 - Material UI" />
                </div>
                <Code codeUrl="7e8e1767edc964d0a7a03515dcee7051"/>
                <CodeResult code={<MaterialUIEx04 />} />
            </div>
            <ChooseMenu />
        </div>
    )
}

export default MaterialUI