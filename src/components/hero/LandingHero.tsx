export const LandingHero = ({ text }: { text: string }) => {
  return (
    <>
      <section className='w-full text-left relative'>
        <div className='w-full bg-center text-black md:text-white md:bg-fixed bg-cover bg-hero-small md:bg-hero-image min-h-[700px]'>
          <div className='absolute top-1/2 md:top-1/2 md:mt-1/2 md:w-1/2'>
            <h1 className='leading-10 uppercase text-5xl ml-8 show-anim'>{text}</h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingHero
