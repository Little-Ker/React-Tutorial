import React from "react"
import { Mousewheel, Pagination, Navigation } from "swiper"
import { Swiper, SwiperSlide  } from 'swiper/react'
import styles from './swiper.module.sass'

import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
 
const SwiperTest = () => {
  const swiperAry = [1, 2, 3, 4, 5]
  return (
    <div className={styles.swiperTest}>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Mousewheel, Pagination, Navigation]}
        onSlideChange={() => {console.log('change')}}
        className={styles.swiper}
      >
        {swiperAry.map((val, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>Slide {val}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
 
export default SwiperTest
