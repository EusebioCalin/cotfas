import cn from 'classnames'
import styles from './hero.module.scss'
import Image from 'next/image'
import { getImage } from '@/utils/utils'

const imageSrc = '/images/hero2.jpg'

const SecondaryHero = async ({ text }: { text: string }) => {
  const { base64, img } = await getImage(imageSrc)

  return (
    <>
      {/* <section ref={currentElement} className='w-full text-left relative'>
        <div className='w-full bg-center text-white md:bg-fixed bg-cover bg-hero2-image min-h-[60vh] md:min-h-[50vh]'>
          <div className='absolute top-1/2 md:top-1/2 md:mt-1/2 md:w-1/2'>
            <h1
              className={cn(
                'secondaryHero leading-10 uppercase text-5xl ml-8',
                isVisible ? styles.showAnim : '',
              )}
            >
              {text}
            </h1>
          </div>
        </div>
      </section> */}

      <section className='w-full text-left text-white'>
        <div className={`min-h-[60vh] md:min-h-[50vh] relative w-full ${styles.imageClipPath}`}>
          <div className='fixed h-full w-full top-0 left-0'>
            <Image
              priority
              src={img}
              alt='Andrei Cotfas'
              placeholder='blur'
              blurDataURL={base64}
              quality={100}
              fill
              style={{
                objectFit: 'cover',
              }}
              unoptimized
            />
          </div>
          <div className='absolute top-1/2 md:top-1/2 md:mt-1/2 md:w-1/2'>
            <h1 className={cn('leading-10 uppercase text-5xl ml-8', styles.showAnim)}>{text}</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecondaryHero
