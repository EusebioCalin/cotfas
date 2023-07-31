'use client'
import Button from '../button/Button'
import text from '@/utils/en-US.json'

export const GetStarted = () => {
  return (
    <div className='my-16'>
      <p className='leading-5 text-lg'> {text['content.text2']}</p>
      <p className='leading-5 text-lg'> {text['content.text3']}</p>
      <p className='leading-5 text-lg'> {text['content.text4']}</p>
      <div className='mt-16'>
        <Button text={'Get started'} onClick={() => {}} />
      </div>
    </div>
  )
}
