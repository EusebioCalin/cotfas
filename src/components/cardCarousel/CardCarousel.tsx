import Carousel from '@/components/carousel/Carousel'
import CarouselCard from '@/components/card/CarouselCard'
import texts from '@/utils/en-US.json'

interface IPTCardCarousel {
  data: Array<{
    title?: string
    text?: string
    image: string
    imageDimensions?: { width: number; height: number }
  }>
}

const PersonalTrainingCardCarousel = ({ data }: IPTCardCarousel) => {
  const carouselCards = data.map((elem) => (
    <CarouselCard
      key={elem.title}
      //@ts-ignore
      title={texts[elem.title]}
      //@ts-ignore
      text={texts[elem.text]}
      image={elem.image}
      imageDimensions={elem.imageDimensions}
    />
  ))

  return <Carousel data={carouselCards} />
}

export default PersonalTrainingCardCarousel
