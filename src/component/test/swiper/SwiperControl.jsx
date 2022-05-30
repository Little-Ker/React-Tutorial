import React, { useRef, useLayoutEffect } from "react"
import { Navigation, Controller } from "swiper"
import { Swiper, SwiperSlide  } from 'swiper/react'
import styles from './swiper.module.sass'

// Import Swiper styles
import 'swiper/css'
import "swiper/css/pagination"
import "swiper/css/navigation"
 
const SwiperControl = () => {
  const swiperAry = [1, 2, 3, 4, 5]

  const swiper1Ref = useRef()
  const swiper2Ref = useRef()

  useLayoutEffect(() => {
    swiper1Ref.current.controller.control = swiper2Ref.current
    swiper2Ref.current.controller.control = swiper1Ref.current
  }, [])

  return (
    <div className={styles.swiperTest}>
      <Swiper
        navigation={true}
        modules={[Navigation, Controller]}
        onSwiper={(swiper) => {
            swiper1Ref.current = swiper
        }}
        className={`${styles.swiper} ${styles.swiper2}`}
      >
        {swiperAry.map((val, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>A {val}</SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        navigation={true}
        modules={[Navigation, Controller]}
        onSwiper={(swiper) => {
            swiper2Ref.current = swiper
        }}
        className={`${styles.swiper} ${styles.swiper3}`}
      >
        {swiperAry.map((val, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>B {val}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
 
export default SwiperControl
