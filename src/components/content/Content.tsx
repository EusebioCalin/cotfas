import Image from 'next/image'
import text from '@/utils/en-US.json'

export const Content = () => {
  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center'>
        <div className='my-16 flex flex-col content-center items-center px-6 lg:px-0'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {text['content.sectionTitle']}
          </h1>
          <div className='my-16'>
            <p className='leading-5 text-lg'> {text['content.text1']}</p>
            <p className='leading-5 text-lg'> {text['content.text2']}</p>
            <p className='leading-5 text-lg'> {text['content.text3']}</p>
            <p className='leading-5 text-lg'> {text['content.text4']}</p>
          </div>
          <div className='w-full grid md:gap-8 grid-cols-1 md:grid-cols-2 place-items-center'>
            <Image
              className='pb-4 md:p-0'
              src='/images/gallery_1-mobile.jpg'
              width={1500}
              height={1500}
              alt='Picture of the author'
            />
            <Image
              className='pb-4 md:p-0'
              src='/images/gallery_2-mobile.jpg'
              width={1500}
              height={1500}
              alt='Picture of the author'
            />
          </div>
          <p className='mt-16 w-full leading-5 text-lg'>{text['content.text5']}</p>
        </div>
      </section>
    </>
  )
}

export default Content
