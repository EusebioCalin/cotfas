'use client'
import Button from '@/components/button/AppButton'
import text from '@/utils/en-US.json'
import Link from 'next/link'

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
          <Link href='https://app.fitr.training/p/peakmotion' target='_blank'>
            <Button text={'Get Started'} onClick={() => {}} />
          </Link>
        </div>
      </div>
    </div>
  )
}
