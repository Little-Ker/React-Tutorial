import React from "react"

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
import List from '../../component/list/List'

import SwiperEx01 from '../../component/test/swiper/SwiperTest'
import SwiperEx02 from '../../component/test/swiper/SwiperVertical'
import SwiperEx03 from '../../component/test/swiper/SwiperFade'
import SwiperEx04 from '../../component/test/swiper/SwiperBtn'
import SwiperEx05 from '../../component/test/swiper/SwiperBreak'
import SwiperEx06 from '../../component/test/swiper/SwiperNoSwiping'
import SwiperEx07 from '../../component/test/swiper/SwiperControl'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: 'Material UI', to: '/materialUI'
        },
        next: {
            title: '外部文字嵌入', to: '/font'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function MaterialUI() {
    return (
        <div>
            <Title txt="Swiper" />
            <div>
                <SubTitle txt="# 關於 Swiper" />
                <div>
                    <Hyperlink linkUrl="https://swiperjs.com/demos" txt="Swiper Demos" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://swiperjs.com/react" txt="Swiper React Components | API" />
                </div>
            </div>
            <div>
                <SubTitle txt="# Swiper 安裝指令" />
                <Npm npmTxt="npm i swiper" />
            </div>
            <div>
                <SubTitle txt="# Swiper 用法" />
                <DotItem txt={'參數說明'} />
                <div className='listMl'>
                    <List />
                </div> 
                <Code codeUrl="1b6a82437f4fb5d4339127ed151cf7c3"/>
                <CodeResult code={<SwiperEx01 />} />
            </div>
            <Block />
            <Divider />
            <div>
               <SubTitle txt="# 改成直式 Swiper" />
                <Code codeUrl="2e73c3ca20a45344d46e141001f62757"/>
                <CodeResult code={<SwiperEx02 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Swiper 切換效果" />
                <DotItem txt={'Cube'} />
                <DotItem txt={'Coverflow'} />
                <DotItem txt={'Flip'} />
                <DotItem txt={'Cards'} />
                <DotItem txt={'Fade 淡入淡出切換'} />
                <Code codeUrl="e7fc201cbf02277202fa2f0fbcf819f5"/>
                <CodeResult code={<SwiperEx03 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Swiper 客製化切換按鈕" />
                <Code codeUrl="0b265d1fe60469a913559b9506452fee"/>
                <CodeResult code={<SwiperEx04 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Swiper 斷點（RWD）" />
                <Code codeUrl="ca5dcf3d96782c70109e8fc77f2ad28b"/>
                <CodeResult code={<SwiperEx05 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 關閉手滑拖曳功能" />
                <DotItem txt={'方法 1：在 <Swiper> 加上 class 名 "swiper-no-swiping"。'} />
                <DotItem txt={'方法 2：在 <Swiper> 加上 allowTouchMove = { false }。'} />
                <Code codeUrl="fc0a7d133739eb5f2ab46530ddf08fe0"/>
                <CodeResult code={<SwiperEx06 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Controller 控制另一個 swiper" />
                <DotItem txt={'使用 useRef 和 useLayoutEffect 設定 控制器'} />
                <Code codeUrl="6b945cc052ca0e30e38293f4eccdbe7b"/>
                <CodeResult code={<SwiperEx07 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://loganluo.medium.com/%E5%A5%BD%E7%94%A8%E7%9A%84%E6%8F%92%E4%BB%B6-swiper-%E5%9C%96%E7%89%87%E6%BB%91%E5%8B%95%E8%BC%AA%E6%92%AD-ii-2d23096a1c43" txt="好用的插件: Swiper 圖片滑動輪播 - 參數調整" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default MaterialUI