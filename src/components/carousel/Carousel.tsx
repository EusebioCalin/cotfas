'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css'
import 'swiper/css/effect-cards'
import styles from './Carousel.module.scss'
import { ReactNode } from 'react'

export default function Carousel({
  data,
  carouselType = 'navigation',
}: {
  data: Array<ReactNode>
  carouselType?: 'navigation' | 'cards'
}) {
  const renderedItems = data.map((elem, index) => (
    <SwiperSlide key={`swiper_${index}`}>{elem}</SwiperSlide>
  ))

  if (carouselType === 'navigation') {
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
  if (carouselType === 'cards') {
    return (
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={styles.mySwiperCards}
      >
        {renderedItems}
      </Swiper>
    )
  }
}
