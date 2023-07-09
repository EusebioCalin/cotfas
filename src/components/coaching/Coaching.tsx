import texts from '@/utils/en-US.json'

export const Coaching = () => {
  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center md:px-0'>
        <div className='my-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['coaching.title']}
          </h1>
        </div>
      </section>
    </>
  )
}

export default Coaching
