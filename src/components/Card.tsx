const Card = ({ text }: { text: string }) => {
  return (
    <div className='card w-full'>
      <div
        className={`card__background bg-cover bg-center absolute bg-[url('https://source.unsplash.com/random/800x400/?fitness')]`}
      ></div>
      <div className='card__content'>
        <h3 className='card__heading'>{text}</h3>
      </div>
    </div>
  )
}
export default Card
