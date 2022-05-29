import React from "react"
import { Mousewheel, Navigation } from "swiper"
import { Swiper, SwiperSlide  } from 'swiper/react'
import styles from './swiper.module.sass'

// Import Swiper styles
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
 
const SwiperNoSwiping = () => {
  const swiperAry = [1, 2, 3, 4, 5]
  return (
    <div className={styles.swiperTest}>
      <Swiper
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation]}
        className={`${styles.swiper}`}
        allowTouchMove={false}
      >
        {swiperAry.map((val, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>Slide {val}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
 
export default SwiperNoSwiping