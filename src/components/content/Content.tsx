import Card from '../Card'

export const Content = ({
  image,
  imageLeftAlign = false,
}: {
  image: string
  imageLeftAlign?: boolean
}) => {
  return (
    <>
      <section className='w-full text-right'>
        <div
          className='m-h-96 min-h-[600px] flex'
          style={{ flexDirection: imageLeftAlign ? 'row' : 'row-reverse' }}
        >
          <div className='w-1/2 h-6'>
            <div
              style={{ backgroundImage: `url(${image})` }}
              className={`w-96 h-96 bg-cover bg-center 
        shadow-lg shadow-red-600`}
            ></div>
          </div>
          <div className='top-1/2 mt-1/2 w-1/2 h-6'>
            <p className='leading-8 uppercase text-xl'>
              Are you ready to take your fitness journey to the next level? Look no further! I'm
              Andrei Cotfas, a former professional football player turned personal trainer, and I'm
              here to guide you towards a healthier, stronger, and more vibrant life.
            </p>
          </div>
        </div>
      </section>
      {/* <section className='w-full text-right'>
        <div className='m-h-96 min-h-[600px] flex'>
          <div className='top-1/2 mt-1/2 w-1/2 h-6'>
            <p className='leading-8 uppercase text-xl'>
              Drawing upon my extensive experience in professional sports and my education in sports
              science, I have developed a training philosophy that focuses on enhancing your overall
              movement patterns, helping you move better and feel better for the years to come. Gone
              are the days of aimlessly chasing aesthetics or short-term results. It's time to
              invest in your long-term well-being.
            </p>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Content
