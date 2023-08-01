import texts from '@/utils/en-US.json'
import Image from 'next/image'
import { getImage } from '@/utils/utils'

export const Coaching = async () => {
  const { base64, img } = await getImage('/images/coaching-mobile.jpg')

  return (
    <>
      <section id='coaching' className='max-w-screen-xl text-center px-6'>
        <div className='mt-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['coaching.sectionTitle']}
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 mt-8 gap-8'>
            <Image
              className=' lg:col-span-2'
              src={img}
              width={1500}
              height={1500}
              alt='Andrei Cotfas'
              placeholder='blur'
              blurDataURL={base64}
            />
            <div className='text-xl'>
              <div>{texts['coaching.text']}</div>
              <div>COMING SOON</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Coaching
