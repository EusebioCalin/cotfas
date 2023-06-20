const Card = ({ text, image }: { text?: string | undefined; image: string }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`w-10/12 md:w-full min-h-[400px] bg-cover bg-center 
        shadow-lg shadow-red-600 rounded-md`}
    >
      <div className='w-full min-h-[400px] self-center	flex rounded-md bg-red-600 bg-opacity-50 text-white-600 transition duration-500 ease-in opacity-0 hover:opacity-100'>
        {text && (
          <div className='transition duration-500 ease-in-out transform hover:translate-y-8 '>
            <p>{text}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default Card
