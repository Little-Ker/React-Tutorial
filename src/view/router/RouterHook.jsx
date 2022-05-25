import React from "react"
import { useLocation, useParams, useNavigate, Link } from "react-router-dom"
import styles from './routerHook.module.sass'

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
import CodeResult from '../../component/codeResult/CodeResult'

import img05 from '../../assets/images/05.jpg'
import img06 from '../../assets/images/06.jpg'

function ChooseMenu() {
    const menuList = {
        prev: {
            title: '巢狀路由', to: '/routerNested'
        },
        next: {
            title: 'HashRouter', to: '/hashRouter'
        }
    }

    return (
        <Menu data={menuList} />
    )
}

function RouterHookEx01() {
    const locationAndParams = useLocation()
    const location = useLocation().pathname.split('/')[1]

    return (
        <div className={styles.routerHookEx01}>
            <h3><span className={styles.grayTxt}>pathname / params: </span> {locationAndParams.pathname}</h3>
            <h3><span className={styles.grayTxt}>pathname: </span>{location}</h3>
            <div className={`btn ${styles.btn}`} onClick={() => {
                console.log('locationAndParams:',locationAndParams)
                console.log('location:',location)
            }}>Show console.log</div>
        </div>
    )
}

function RouterHookEx02() {
    const params = useParams()

    return (
        <div className={styles.routerHookEx01}>
            <h3><span className={styles.grayTxt}>params: </span> {params.id}</h3>
            <Link to="/router-hook/456" className={`btn ${styles.btn}`}>params /456</Link>
            <div className={`btn ${styles.btn}`} onClick={() => console.log('params:',params)}>Show console.log</div>
        </div>
    )
}

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function RouterHookEx03() {
    let query = useQuery()

    return (
        <div className={styles.routerHookEx01}>
            <Child name={query.get("name")} />
            <div className="linkList">
                <Link to="/router-hook/123?name=AAA" className="link">A</Link>
                <Link to="/router-hook/123?name=BBB" className="link">B</Link>
                <Link to="/router-hook/123?name=CCC" className="link">C</Link>
            </div>
            <p>（網址改變）</p>
        </div>
    )
}

function Child({ name }) {
    return (
      <div>
        {name ? (
          <h3 className={styles.grayTxt}>
            The <code className={styles.whiteTxt}>name</code> in the query string is 
            <span className={styles.whiteTxt}> &quot;{name}&quot;</span> 
          </h3>
        ) : (
          <h3>There is no name in the query string</h3>
        )}
      </div>
    )
}

function RouterHookEx04() {
    let navigate = useNavigate()

    return (
        <div className={styles.routerHookEx01}>
            <div className={`btn ${styles.btn}`} onClick={() => navigate(-1)}>Go Back</div>
            <div className={`btn ${styles.btn}`} onClick={() => navigate('/home')}>Go Home</div>
        </div>
    )
}

function RouterHook() {
    return (
        <div className={styles.install}>
            <Title txt="React Router Hook" />
            <div>
                <SubTitle txt="# useLocation" />
                <DotItem txt={'會回傳 Object 物件, 裡面包含 pathname、search、hash、state 訊息。'} />
                <Code codeUrl="586d3629ffdb06b168b27bae581103ad"/>
                <CodeResult code={<RouterHookEx01 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useParams" />
                <DotItem txt={'會回傳一個鍵值對的物件，可以用來取得 URL 上的參數值。'} />
                <DotItem txt={'在 RouterPage 安排路徑時，需加上 /:id'} />
                <Img imgUrl={img05} />
                <Code codeUrl="bd29198a0327bfdc281e9f8d3b380b2a"/> 
                <CodeResult code={<RouterHookEx02 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# Query Parameters" />
                <DotItem txt={' Query Parameters 的 url，可以直接寫成路由。'} />
                <DotItem txt={'透過瀏覽器的 API "URLSearchParams" 去取出 query 值。'} />
                <Img imgUrl={img06} />
                <Code codeUrl="61a68e0eda01847600630a983db4aaf1"/> 
                <CodeResult code={<RouterHookEx03 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# useNavigate" />
                <Tips txt={['v6 版本後， useNavigate 代替了 useHistory。']} />
                <DotItem txt={'navigate(參數) 數字代表前進或回去的頁數。'} />
                <DotItem txt={'navigate("/路徑") 直接寫上要前往的路徑。'} />
                <Code codeUrl="b702eb2e8e46c823fc015d95e66f3623"/>
                <CodeResult code={<RouterHookEx04 />} />
            </div>
            <Block />
            <Divider />
            <div>
                <SubTitle txt="# 參考連結" />
                <div>
                    <Hyperlink linkUrl="https://tomchen60317.github.io/2020/01/22/react/React-Router-%E8%88%87-Hook-%E9%82%82%E9%80%85-2/" txt="React-Router-與-Hook-邂逅" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://ithelp.ithome.com.tw/articles/10276227" txt="Day18-React Router 篇-上篇" />
                </div>
                <div>
                    <Hyperlink linkUrl="https://ithelp.ithome.com.tw/articles/10282773?sc=iThomeR" txt="[Bonus 系列] - 來看看 React Router v6 有什麼新功能?和 v5 有哪些地方不同?" />
                </div>
            </div>
            <ChooseMenu />
        </div>
    )
}

export default RouterHook