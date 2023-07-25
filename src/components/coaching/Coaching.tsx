import texts from '@/utils/en-US.json'
import Image from 'next/image'
import Button from '../button/Button'

export const Coaching = () => {
  return (
    <>
      <section id='coaching' className='max-w-screen-xl text-center px-6'>
        <div className='mt-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['coaching.sectionTitle']}
          </h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 mt-16 gap-8'>
            <Image
              className=' lg:col-span-2'
              src={'/images/coaching-mobile.jpg'}
              width={1500}
              height={1500}
              alt='Andrei Cotfas'
              // placeholder='blur'
              // to be replaced with small 10px image
              // blurDataURL={rgbDataURL(255, 255, 100)}
            />
            <div className=''>
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
