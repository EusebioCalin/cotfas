import texts from '@/utils/en-US.json'
import Image from 'next/image'
import Button from '../button/Button'

export const Coaching = () => {
  return (
    <>
      <section id='coaching' className='max-w-screen-xl grid-cols-1 text-center px-6'>
        <div className='mt-16 flex flex-col  content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['coaching.sectionTitle']}
          </h1>
          <div className='flex flex-col md:flex-row items-center justify-center mt-16'>
            <div className='w-full md:w-1/2'>
              <Image
                src={'/images/card_1.jpg'}
                width={500}
                height={500}
                alt='Andrei Cotfas'
                // placeholder='blur'
                // to be replaced with small 10px image
                // blurDataURL={rgbDataURL(255, 255, 100)}
              />
            </div>
            <div className='w-full md:w-1/2'>
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
