import texts from '@/utils/en-US.json'
import Carousel from '@/components/carousel/Carousel'
import { CarouselCard } from '@/components/card/Card'

export const Testimonials = () => {
  const carouselData = ['testimonials.text1', 'testimonials.text1']
  const carouselCards = carouselData.map((elem, index) => (
    //@ts-ignore
    <CarouselCard key={`index_${elem}`} text={texts[elem]} />
  ))
  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center px-6 md:px-0'>
        <div className='my-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['testimonials.title']}
          </h1>

          <div className='lg:hidden my-16 grid grid-cols-1 place-items-center'>
            <Carousel data={carouselCards} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials
