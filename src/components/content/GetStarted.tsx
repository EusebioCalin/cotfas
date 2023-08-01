'use client'
import Button from '../button/Button'
import text from '@/utils/en-US.json'

export const GetStarted = () => {
  return (
    <div className='my-8'>
      <p className='text-xl'> {text['content.text2']}</p>
      <p className='text-xl'> {text['content.text3']}</p>
      <div className='mt-8'>
        <h1 className='mb-8 font-semibold uppercase text-xl text-color-secondary'>
          {text['content.text4']}
        </h1>
        <div className='text-xl'>
          <Button text={'Get started'} onClick={() => {}} />
        </div>
      </div>
    </div>
  )
}
