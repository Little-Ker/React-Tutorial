import React from "react"
import { Mousewheel, Pagination } from "swiper"
import { Swiper, SwiperSlide  } from 'swiper/react'
import styles from './swiper.module.sass'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/virtual'
import "swiper/css/pagination"
 
const SwiperVertical = () => {
  const swiperAry = [1, 2, 3, 4, 5]
  return (
    <div className={styles.swiperTest}>
      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        loop={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className={styles.swiper}
      >
        {swiperAry.map((val, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>Slide {val}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
 
export default SwiperVertical