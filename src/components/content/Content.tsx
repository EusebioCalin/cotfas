import Image from 'next/image'
import text from '@/utils/en-US.json'
import { getImage } from '@/utils/utils'
import { GetStarted } from './GetStarted'

export const Content = async () => {
  const [imageData1, imageData2] = await Promise.all([
    getImage('/images/gallery_1.jpg'),
    getImage('/images/gallery_2.jpg'),
  ])

  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center'>
        <div className='my-16 flex flex-col content-center items-center px-6 lg:px-0'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {text['content.sectionTitle']}
          </h1>
          <GetStarted />
          <div className='w-full grid md:gap-8 grid-cols-1 md:grid-cols-2 place-items-center'>
            <Image
              className='pb-4 md:p-0'
              src={imageData1.img}
              width={1500}
              height={1500}
              alt='Andrei Cotfas'
              placeholder='blur'
              blurDataURL={imageData1.base64}
            />
            <Image
              className='pb-4 md:p-0'
              src={imageData2.img}
              width={1500}
              height={1500}
              alt='Andrei Cotfas'
              placeholder='blur'
              blurDataURL={imageData2.base64}
            />
          </div>
          <p className='mt-16 w-full leading-5 text-lg'>{text['content.text5']}</p>
          <div className='my-16'>
            <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
              {text['content.subtitle']}
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
