import React from "react"
import styles from './gitPages.module.sass'

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import Npm from '../../component/npm/Npm'
import Img from '../../component/img/Img'

import img09 from '../../assets/images/09.jpg'
import img10 from '../../assets/images/10.jpg'
import img11 from '../../assets/images/11.jpg'
import img12 from '../../assets/images/12.jpg'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Redux - 使用 Axios 取得資料', to: '/redux-axios'
        },
        next: {
            title: 'git pages - bug 與處理', to: '/gitPagesBug'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function GitPages() {
    return (
        <div className={styles.gitPages}>
            <Title txt="git pages 部屬方法" />
            <div>
                <SubTitle txt="# 關於 git pages" />
                <DotItem txt={'Github 提供可以放置靜態網站的服務。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 部屬套件安裝指令" />
                <Npm npmTxt="npm install --save gh-pages" />
            </div>
            <div>
                <SubTitle txt="# 設定部屬指令" />
                <DotItem txt={'在 package.json 新增 homepage 欄位。'} />
                <div className={styles.jsonList}>
                    <DotItem txt={'myusername 改成自己的 github 帳號（需都小寫）。'} />
                    <DotItem txt={'my-app 改成 Github 上建立的專案名稱。'} />
                </div>
                <Code codeUrl="840cbb798e3a5a3927baf058c373a7a7"/>
                <Img imgUrl={img09} />
                <DotItem txt={'在 package.json 的 scripts 欄位添加指令。'} />
                <Code codeUrl="98ad75ed5876c0d7e2413068625aa2ea"/>
            </div>
            <div>
                <SubTitle txt="# 開始部屬" />
                <DotItem txt={'輸入指令發布到 Github Page 上。'} />
                <Npm npmTxt="npm run deploy" />
                <DotItem txt={'到 Github 切換成 gh-pages 分支。'} />
                <Img imgUrl={img10} />
                <DotItem txt={'進入 Settings / Pages 將資料來源改成 gh-pages 分支。'} />
                <Img imgUrl={img11} />
                <DotItem txt={'點擊 Github Pages 提供的網址看結果。'} />
                <Img imgUrl={img12} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://ithelp.ithome.com.tw/articles/10228423" txt="[Day 29] 寫網頁就是要炫耀啊，不然要幹麻？發布上 Github Pages 吧！" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default GitPages