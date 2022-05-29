import React from "react"
import { Mousewheel, Navigation } from "swiper"
import { Swiper, SwiperSlide  } from 'swiper/react'
import { EffectFade } from 'swiper'
import styles from './swiper.module.sass'

// Import Swiper styles
import 'swiper/css'
import "swiper/css/navigation"
import 'swiper/css/effect-fade'
 
const SwiperFade = () => {
  const swiperAry = [1, 2, 3, 4, 5]
  return (
    <div className={styles.swiperTest}>
      <Swiper
        mousewheel={true}
        navigation={true}
        modules={[Mousewheel, Navigation, EffectFade]}
        effect="fade"
        className={styles.swiper}
      >
        {swiperAry.map((val, index) => (
            <SwiperSlide key={index} className={`${styles.swiperSlide} ${styles[`bg${index+1}`]}`}>Slide {val}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
 
export default SwiperFade