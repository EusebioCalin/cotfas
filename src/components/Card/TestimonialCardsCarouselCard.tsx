import Image from 'next/image'

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
          alt='client_profile_picture'
        />
      </div>

      <h1 className='leading-8 text-center my-4 text-2xl text-color-secondary'>{clientName}</h1>
      <p className='leading-5 text-center mx-16'>{text}</p>
    </div>
  )
}

export default TestimonialCardsCarouselCard
