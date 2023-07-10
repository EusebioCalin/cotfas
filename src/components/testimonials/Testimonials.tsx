import texts from '@/utils/en-US.json'
import Carousel from '@/components/carousel/Carousel'
import { TestimonialCardsCarouselCard } from '@/components/card/Card'

export const Testimonials = () => {
  const carouselData = [
    'testimonials.text1',
    'testimonials.text2',
    'testimonials.text3',
    'testimonials.text4',
  ]
  const carouselCards = carouselData.map((elem, index) => (
    //@ts-ignore
    <TestimonialCardsCarouselCard key={`index_${elem}`} text={texts[elem]} />
  ))
  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center md:px-0'>
        <div className='mt-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['testimonials.title']}
          </h1>

          <div className='hidden xs:grid grid-cols-1 my-16 text-center relative max-w-screen-xl'>
            <Carousel carouselType='cards' data={carouselCards} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
