export const SliderHero = ({ image, text }: { image: string; text: string }) => {
  return (
    <>
      <section className={`w-full text-left bg-cover bg-center bg-fixed ${image}`}>
        <div className='m-h-96 min-h-[600px] relative'>
          <div className='top-1/2 mt-1/2 w-1/2 absolute h-6'>
            <h1 className='leading-10 uppercase text-5xl'>
              {text}
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderHero
