import React from "react"
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react'
import styles from './swiper.module.sass'

// Import Swiper styles
import 'swiper/css'
 
const SwiperButtonNext = () => {
  const swiper = useSwiper()
  return (<button onClick={() => swiper.slideNext()} className={styles.swiperButtonNext}>Next</button>)
}

const SwiperButtonPrev = () => {
    const swiper = useSwiper()
    return (<button onClick={() => swiper.slidePrev()}>Prev</button>)
}
 
const SwiperBtn = () => {
  const swiperAry = [1, 2, 3, 4, 5]
  return (
    <div className={styles.swiperTest}>
      <Swiper
        loop={true}
        className={styles.swiper}
      >
        <SwiperButtonPrev />
        <SwiperButtonNext />
        {swiperAry.map((val, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>Slide {val}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
 
export default SwiperBtn
