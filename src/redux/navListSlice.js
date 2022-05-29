import { createSlice } from "@reduxjs/toolkit";
export const navListSlice = createSlice({
  name: "navList",
  initialState: {
    navList: [{
        title: 'CRA',
        content: [{
            txt: '安裝 React', to: 'install'
        }]
    },{
        title: '基礎套件',
        content: [{
            txt: 'sass', to: 'sass'
        },{
            txt: 'eslint', to: 'eslint'
        },{
            txt: 'clsx', to: 'clsx'
        }]
    },{
        title: 'Component',
        content: [{
            txt: 'Component 與 prop', to: 'prop'
        },{
            txt: 'prop-types', to: 'prop-types'
        }]
    },{
        title: 'Hooks',
        content: [{
            txt: 'Hook 介紹', to: 'hook'
        },{
            txt: 'useState', to: 'useState'
        },{
            txt: 'useEffect', to: 'useEffect'
        },{
            txt: 'useCallback', to: 'useCallback'
        },{
            txt: 'useRef', to: 'useRef'
        }]
    },{
        title: 'router',
        content: [{
            txt: '安裝 router', to: 'router'
        },{
            txt: '巢狀路由', to: 'routerNested'
        },{
            txt: 'Router Hook', to: 'router-hook/123'
        },{
            txt: 'Router Mode', to: 'routerMode'
        }]
    },{
        title: 'redux',
        content: [{
            txt: '安裝 redux', to: 'redux-install'
        },{
            txt: '取得 / 改變 資料', to: 'redux-state'
        },{
            txt: '延遲改資料事件', to: 'redux-asyncState'
        },{
            txt: '使用 Axios 取得資料', to: 'redux-axios'
        }]
    },{
        title: '部屬 git pages',
        content: [{
            txt: '部屬方法', to: 'gitPages'
        },{
            txt: 'bug 與處理', to: 'gitPagesBug'
        }]
    },{
        title: '額外套件',
        content: [{
            txt: 'Axios', to: 'axios'
        },{
            txt: 'Mock js', to: 'mock'
        },{
            txt: 'Material UI', to: 'materialUI'
        },{
            txt: 'Swiper', to: 'swiper'
        },{
            txt: '外部文字嵌入',  to: 'font'
        }]
    }]
  },
  reducers: {}
})

export default navListSlice.reducer