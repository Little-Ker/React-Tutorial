import React from "react"
import styles from './list.module.sass'

const titleAry = [{
    title: '參數',
    size: 30
},{
    title: '說明',
    size: 70
}
]

const listAry = [[
    'direction', '播放方向'
],[
    'slidesPerView', '單個畫面顯示頁面數'
],[
    'slidesPerGroup', '一起綁定頁面數'
],[
    'spaceBetween', '頁面間間距'
],[
    'speed', '轉場速度'
],[
    'navigation', '左右切換按鈕'
],[
    'pagination', '頁碼樣式'
],[
    'effect', '轉場效果'
],[
    'autoplay', '調整自動播放'
],[
    'breakpoints', '斷點 RWD 設定'
],[
    'allowTouchMove', 'false 模式為關閉手動操作，無法用點擊或拖曳方式切換圖片'
]]

function List() {
    return (
        <div className={styles.list}>
            <div className={styles.title}>
                {titleAry.map((item, index) => (
                    <p style={{width: `${item.size}%`}} key={index}>{item.title}</p>
                ))}
            </div>
            <div className={styles.contentList}>
                {listAry.map((item, index) => (
                    <div key={index} className={styles.content}>
                        {titleAry.map((item2, index) => (
                            <p style={{width: `${item2.size}%`}} key={index}>{item[index]}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List