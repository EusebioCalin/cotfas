const Card = ({ text, image }: { text: string; image: string }) => {
  return (
    <div className='card-grid-space'>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`w-96 h-96 bg-cover bg-center 
        shadow-lg shadow-red-600
        
        `}
      >
        <div className='w-full h-full flex bg-red-600 bg-opacity-50 text-white-600 transition duration-500 ease-in opacity-0 hover:opacity-100'>
          <div className='pl-5'></div>
          <div className='transition duration-500 ease-in-out transform hover:translate-y-8 '>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
