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



export default Card
