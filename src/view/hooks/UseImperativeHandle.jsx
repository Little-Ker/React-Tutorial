import React, { useRef, useEffect, useState } from "react"
import styles from './useImperativeHandle.module.sass'

import DotItem from '../../component/dotItem/DotItem'
import Title from '../../component/title/Title'
import SubTitle from '../../component/subTitle/SubTitle'
// import Code from '../../component/code/Code'
import Menu from '../../component/menu/Menu'
import Divider from '../../component/divider/Divider'
import Block from '../../component/block/Block'
import Hyperlink from '../../component/hyperlink/Hyperlink'
import CodeResult from '../../component/codeResult/CodeResult'
import ChildCommand from "./sub/ChildCommand"

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'useRef', to: '/useRef'
        },
        next: {
            title: '安裝 router', to: '/router'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

// 程式碼整理
// 父層
// import React, { useRef } from "react"
// import ChildComponent from "./sub/ChildComponent"
// function ParentComponent() {
//     const childCommandRef = useRef('')
//     return (
//         <div>
//             <ChildCommand
//                 ref={childCommandRef}
//             />
//             <button onClick={()=>{
//                 console.log('childCommandRef', childCommandRef.current.command)
//             }}></button>
//         </div>
//     )
// }
// export default ParentComponent

// 子層
// import React, { forwardRef, useImperativeHandle, useState } from 'react'
// function ChildComponent(props, ref) {
//     const [command, setCommand] = useState('123')
//     useImperativeHandle(ref, () => ({
//         command,
//     }))
//     return (
//         <div>
//             <input value={command} onChange={(e) => setCommand(e.target.value)} />
//         </div>
//     )
// }
// export default forwardRef(ChildComponent)


function UseRefEx01() {
    const childCommandRef = useRef('')
    const [txt, setTxt] = useState('')

    useEffect(() => {
        setTxt(childCommandRef.current.command)
    }, [])

    return (
        <div className={styles.useRefEx01}>
            <p>{txt}</p>
            <div className={`btn ${styles.btn}`} onClick={()=>{
                setTxt(childCommandRef.current.command)
            }}>改變父層數據</div>
            <Block />
            <ChildCommand
                ref={childCommandRef}
            />
        </div>
    )
}

function UseImperativeHandle() {
    return (
        <div>
            <Title txt="useImperativeHandle" />
            <div>
                <SubTitle txt="# useImperativeHandle 介紹" />
                <DotItem txt={'子組件利用 useImperativeHandle 傳數據給父組件。'} />
                <DotItem txt={'useImperativeHandle 需與 forwardRef 一起使用。'} />
            </div>
            <div>
                <SubTitle txt="# useImperativeHandle 用法" />
                {/* <Code codeUrl="1a97c4d30cebd1bda0f421fb8f48566e"/> */}
                <DotItem txt={'父層創建 useRef，並使用 ref 傳給子層。'} />
                {/* <Code codeUrl="1a97c4d30cebd1bda0f421fb8f48566e"/> */}
                <DotItem txt={'prop 旁補上 ref。'} />
                <DotItem txt={'使用 useImperativeHandle 傳遞數據。'} />
                <DotItem txt={'子層需使用 forwardRef 包住組件。'} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useRef 範例" />
                {/* <Code codeUrl="394c5b4d7e1f047bf1ee97a242fe7440"/> */}
                <CodeResult code={<UseRefEx01 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://segmentfault.com/a/1190000040758640" txt="最陌生的hooks: useImperativeHandle" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default UseImperativeHandle