const Card = ({ title, text, image }: { title: string; text: string; image: string }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`w-10/12 md:w-full min-h-[400px] bg-cover bg-center relative card`}
    >
      <div className='card-anim relative min-h-[400px] px-4 flex flex-col justify-around items-center'>
        <h1 className='font-semibold leading-8 uppercase text-2xl'>{title}</h1>
        <p className='leading-5 uppercase text-lg'>{text}</p>
      </div>
    </div>
  )
}
export default Card
