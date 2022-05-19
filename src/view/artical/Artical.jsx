import React from "react"
import styles from './artical.module.sass'

import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
import Tips from '../../component/tips/Tips'
import Crucial from '../../component/crucial/Crucial'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import Code from '../../component/code/Code'
import DotItem from '../../component/dotItem/DotItem'
import Menu from '../../component/menu/Menu'
import Img from '../../component/img/Img'
import Block from '../../component/block/Block'
import Npm from '../../component/npm/Npm'
import Divider from '../../component/divider/Divider'
import CodeResult from '../../component/codeResult/CodeResult'

function Artical() {
    const txt = "內文 p : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nam ex adipisci aliquam vitae quaerat perspiciatis porro distinctio exercitationem ipsa, necessitatibus sunt saepe? Officia, optio necessitatibus. Exercitationem nemo officia quod?"
    const tipsTxt = ["提示框 Tips : SubTitle - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet nam ex adipisci aliquam vitae Officia, optio necessitatibus."]
    const menuList = {
        prev: {
            title: '', to: ''
        },
        next: {
            title: 'sass', to: '/sass'
        }
    }
    const npmTxt = 'npm i react-embed-gist'
    return (
        <div className={styles.artical}>
            <Title txt="大標題 Title" />

            <SubTitle txt="子標題 SubTitle" />

            <p className={styles.txt}>{txt}</p>

            <Tips txt={tipsTxt} />

            <p className={styles.txt}>
                {txt}<Crucial txt="關鍵字 Crucial"/>
                {txt}<Hyperlink linkUrl="http://localhost:3000/install" txt="超連結文字 Hyperlink" />
                {txt}
            </p>

            <Code codeUrl="87a57b357c9cab70e511dfaaca99477c"/>

            <CodeResult />

            <Block />
            <SubTitle txt="子標題 SubTitle" />
            <DotItem txt="DotItem 111" />
            <DotItem txt="DotItem 222" />
            <DotItem txt="DotItem 333" />

            <Img imgUrl="https://picsum.photos/700/300" />

            <Divider />

            <Npm npmTxt={npmTxt} />
            <Npm npmTxt={npmTxt} />

            <Menu data={menuList} />
        </div>
    )
}

export default Artical