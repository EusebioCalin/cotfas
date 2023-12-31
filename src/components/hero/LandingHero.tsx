import cn from 'classnames'
import styles from './hero.module.scss'
import Image from 'next/image'
import { getImage } from '@/utils/utils'

const imageSrc = '/images/hero1.jpg'
const LandingHero = async ({ text }: { text: string }) => {
  const { base64, img } = await getImage(imageSrc)
  return (
    <section className='w-full text-left text-white'>
      <div className={`relative min-h-screen w-full ${styles.imageClipPath}`}>
        <div className='fixed h-full w-full'>
          <Image
            unoptimized
            priority
            src={img}
            alt='Andrei Cotfas'
            placeholder='blur'
            blurDataURL={base64}
            quality={100}
            fill
            sizes='100vw'
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
        <div className='absolute top-1/2 md:top-1/2 md:mt-1/2 md:w-1/2'>
          <h1 className={cn('leading-10 uppercase text-5xl ml-8', styles.showAnim)}>{text}</h1>
        </div>
      </div>
    </section>
  )
}

export default LandingHero
