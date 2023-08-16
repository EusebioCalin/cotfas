import { getImage } from '@/utils/utils'
import Image from 'next/image'

export const NavigationCarouselCard = async ({
  title,
  text,
  image,
}: {
  title: string
  text: string
  image: string
}) => {
  const { base64, img } = await getImage(image)

  return (
    <div className='flex flex-col items-center justify-center w-full md:w-2/3 m-auto text-center relative mb-4'>
      {title && (
        <h1 className='font-semibold leading-8 text-center uppercase text-3xl mb-4'>{title}</h1>
      )}
      <Image
        src={img}
        width={500}
        height={500}
        alt='Andrei Cotfas'
        placeholder='blur'
        blurDataURL={base64}
      />
      <p className='text-xl text-center my-4'>{text}</p>
    </div>
  )
}

export default NavigationCarouselCard
