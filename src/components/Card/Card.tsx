import cn from 'classnames'
import styles from './Card.module.scss'
import Image from 'next/image'

// Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const Card = ({ title, text, image }: { title: string; text: string; image: string }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={cn(`w-10/12 md:w-full min-h-[400px] bg-cover bg-center relative`, styles.card)}
    >
      <div
        className={cn(
          styles.cardAnim,
          'relative min-h-[400px] px-4 flex flex-col justify-around items-center',
        )}
      >
        <h1 className='font-semibold leading-8 uppercase text-2xl'>{title}</h1>
        <p className='leading-5 uppercase text-lg'>{text}</p>
      </div>
    </div>
  )
}

export const NavigationCarouselCard = ({
  title,
  text,
  image,
}: {
  title?: string
  text: string
  image?: string
}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:w-2/3 m-auto text-center relative mb-4'>
      {title && (
        <h1 className='font-semibold leading-8 text-center uppercase text-2xl mb-4'>{title}</h1>
      )}
      {image && (
        <Image
          src={image}
          width={500}
          height={500}
          alt='Andrei Cotfas'
          placeholder='blur'
          // to be replaced with small 10px image
          blurDataURL={rgbDataURL(255, 255, 100)}
        />
      )}
      <p className='leading-5 text-center my-4'>{text}</p>
    </div>
  )
}

export const TestimonialCardsCarouselCard = ({
  text,
  image,
  clientName,
}: {
  text: string
  image?: string
  clientName: string
}) => {
  return (
    <div className='flex flex-col items-center justify-start my-8 h-full'>
      <div className={'rounded-full overflow-hidden'}>
        <Image
          src={!!image ? `/images/${image}` : '/images/profile_icon.png'}
          height={100}
          width={100}
          alt={'client_profile_picture'}
        />
      </div>

      <h1 className='leading-8 text-center my-4 text-2xl text-color-secondary'>{clientName}</h1>
      <p className='leading-5 text-center mx-16'>{text}</p>
    </div>
  )
}

export default Card