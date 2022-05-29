import React from "react"
import styles from './materialUI.module.sass'

import Img from '../../component/img/Img'
import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import CodeResult from '../../component/codeResult/CodeResult'

import img15 from '../../assets/images/15.jpg'
import img16 from '../../assets/images/16.jpg'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Swiper', to: '/swiper'
        },
        next: {
            title: '', to: ''
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function FontEx01() {
    return (
        <div>
            <h2 style={{fontFamily: 'Margarine'}}>123</h2>
        </div>
    )
}

function FontEx02() {
    return (
        <div>
            <h2 style={{fontFamily: 'f01'}}>123</h2>
        </div>
    )
}


function FontStyles() {
    return (
        <div className={styles.materialUI}>
            <Title txt="外部文字嵌入" />
            <div>
                <SubTitle txt="# Google Font" />
                <div className={styles.dot}>
                    <Hyperlink linkUrl="https://fonts.google.com/" txt="Browse Fonts - Google Fonts" />
                </div>
                <DotItem txt={'選擇好想用的文字按下 + 獲得 @import 程式碼。'} />
                <Img imgUrl={img15} />
                <DotItem txt={'將程式碼貼入 src / index.css 檔案內。'} />
                <Code codeUrl="2c3c65aead74eba94ea94bbbbfc39559"/>
                <CodeResult code={<FontEx01 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 引入外部文字" />
                <DotItem txt={'準備好 font.ttf 文字檔。'} />
                <Img imgUrl={img16} />
                <DotItem txt={'在 src / index.css 寫 @font-face 。'} />
                <Code codeUrl="73be44ebc1598e654814e878a5237d03"/>
                <CodeResult code={<FontEx02 />} />
            </div>
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://www.igiftidea.com/article/13065358397.html" txt="reactjs 如何在 React.js 中使用 Google 字体？" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://blog.csdn.net/weixin_43271750/article/details/83901010" txt="React 引入外部下载字体" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default FontStyles