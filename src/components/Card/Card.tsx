import cn from 'classnames'
import styles from './Card.module.scss'
import Image from 'next/image'

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

export const CarouselCard = ({
  title,
  text,
  image,
}: {
  title?: string
  text: string
  image?: string
}) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      {title && (
        <h1 className='font-semibold leading-8 text-center uppercase text-2xl my-4'>{title}</h1>
      )}

      {image && <Image src={image} width={500} height={500} alt='Andrei Cotfas' />}
      <p className='leading-5 text-center my-4'>{text}</p>
    </div>
  )
}

export default Card
