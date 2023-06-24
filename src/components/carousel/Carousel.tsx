'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Carousel.module.scss'
import { ReactNode } from 'react'

export default function Carousel({ data }: { data: Array<ReactNode> }) {
  const renderedItems = data.map((elem, index) => (
    <SwiperSlide key={`swiper_${index}`}>{elem}</SwiperSlide>
  ))
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className={styles.mySwiper}
      >
        {renderedItems}
      </Swiper>
    </>
  )
}
