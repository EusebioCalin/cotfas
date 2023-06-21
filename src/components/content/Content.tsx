import Image from 'next/image'
import Card from '../Card'

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

export const Content = () => {
  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center'>
        <div className='my-24 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl'>About me</h1>

          <div className='my-16 mx-4 md:mx-0 md:w-2/3 leading-5 uppercase text-lg'>
            <p>
              I'm Andrei Cotfas, a former professional football player turned personal trainer, and
              I'm here to guide you towards a healthier, stronger, and more vibrant life.
            </p>
          </div>

          <div className='w-full flex flex-col md:grid content-center items-center gap-8 lg:p-4 grid-cols-1 md:grid-cols-2 '>
            <Image
              src='/images/gallery_1.jpg'
              width={500}
              height={500}
              alt='Picture of the author'
            />
            <Image
              src='/images/gallery_2.jpg'
              width={500}
              height={500}
              alt='Picture of the author'
            />
            <Image
              src='/images/gallery_1.jpg'
              width={500}
              height={500}
              alt='Picture of the author'
            />
            <Image
              src='/images/gallery_2.jpg'
              width={500}
              height={500}
              alt='Picture of the author'
            />
          </div>

          <div className='my-16 mx-4 md:mx-0 md:w-2/3 w-2/3 leading-5 uppercase text-lg'>
            <p>
              Drawing upon my extensive experience in professional sports and my education in sports
              science, I have developed a training philosophy that focuses on enhancing your overall
              movement patterns, helping you move better and feel better for the years to come. Gone
              are the days of aimlessly chasing aesthetics or short-term results. It's time to
              invest in your long-term well-being.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
