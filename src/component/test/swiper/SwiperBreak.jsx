import React from "react"
import { Swiper, SwiperSlide  } from 'swiper/react'
import styles from './swiper.module.sass'
import 'swiper/css'

const SwiperBreak = () => {
    const swiperAry = [1, 2, 3, 4, 5]

    const breakpoint = {
        // 畫面 >= 800px
        800: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // 畫面 >= 1200px
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
    }

    return (
        <div className={styles.swiperTest}>
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={breakpoint}
            className={styles.swiper}   
        >
            {swiperAry.map((val, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>Slide {val}</SwiperSlide>
            ))}
        </Swiper>
        </div>
    )
}
 
export default SwiperBreak
