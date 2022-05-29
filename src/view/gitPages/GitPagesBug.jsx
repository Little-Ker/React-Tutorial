import React from "react"
import styles from './gitPagesBug.module.sass'

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import Img from '../../component/img/Img'

import img13 from '../../assets/images/13.jpg'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: '部屬 git pages', to: '/gitPages'
        },
        next: {
            title: 'Axios', to: '/axios'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function GitPagesBug() {
    return (
        <div className={styles.gitPagesBug}>
            <Title txt="git pages 佈署後 bug 與處理" />
            <div>
                <SubTitle txt="# 佈署 git pages 可能遇到的問題" />
                <DotItem txt={'重新整理後出現 404。'} />
                <DotItem txt={'public 資料夾的檔案路徑出錯。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 重新整理後出現 404" />
                <DotItem txt={'將 browserHistory 改為 HashRouter。'} />
                <Code codeUrl="6ac3aac7972b8a9f83457a802c2b676f"/>
                <Img imgUrl={img13} />
                {/* 方法2: 製作一個404頁面，並在進入404頁面後判斷要導向的畫面 */}
                {/* https://blog.yyisyou.tw/8357407a/ */}
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# public 資料夾的檔案路徑出錯" />
                <DotItem txt={'使用 環境變數 調整路徑。'} />
                <div className={styles.publicErr}>
                    <DotItem txt={'在最外層新增 .env 檔案（與 README.md 同層）。'} />
                    <DotItem txt={'只能定義開頭為 REACT_APP 的變數。'} />
                    <DotItem txt={'根據環境變數調整檔案路徑。'} />
                    <Code codeUrl="fe03d7615c55b032c0c9868f414c78c8"/>
                </div>
                <DotItem txt={'環境變數 檔案型態：'} />
                <div className={styles.publicErr}>
                    <DotItem txt={'.env ：預設檔案。'} />
                    <DotItem txt={'.env.local ：本機的設定檔，除了測試其他都可以使用。'} />
                    <DotItem txt={'.env.development、 .env.test 、 .env.production ：根據開發、測試或正式環境的設定檔。'} />
                </div>
                <DotItem txt={'環境變數 檔案配合的指令：'} />
                <div className={styles.publicErr}>
                    <DotItem txt={'npm start ： .env.development 、 .env.local 、 .env'} />
                    <DotItem txt={'npm run build ： .env.production 、 .env.local 、 .env'} />
                </div>
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://medium.com/@williamhuang_96928/%E9%83%A8%E7%BD%B2%E5%9C%A8github-pages%E7%9A%84%E4%BD%9C%E5%93%81-%E9%87%8D%E6%95%B4%E5%BE%8C404%E7%9A%84%E5%95%8F%E9%A1%8C-30f3b4800d73" txt="部署在GitHub Pages的作品，重整後404的問題" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://medium.com/itsoktomakemistakes/create-react-app-custom-global-variables-452caa132b95" txt="如何在 CRA(Create-React-App) 自定全域變數" />
                </div>    
            </div>
            <ChooseMenu />
        </div>
    )
}

export default GitPagesBug