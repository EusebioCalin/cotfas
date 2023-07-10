'use client'
import { Disclosure } from '@headlessui/react'

import texts from '@/utils/en-US.json'

export const FAQ = () => {
  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center'>
        <div className='mt-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['faq.title']}
          </h1>
        </div>
        <div className='w-screen px-4 pt-16 max-w-screen-md'>
          <Disclosure as='div' className={' pb-4'}>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full rounded-lg bg-color-primary px-4 py-2 text-left text-white hover:text-color-secondary '>
                  <span>What is your refund policy?</span>
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-white'>
                  {texts['faq.text']}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as='div'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full rounded-lg bg-color-primary px-4 py-2 text-left text-white hover:text-color-secondary '>
                  <span>Do you offer technical support?</span>
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-white'>
                  {texts['faq.text']}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </section>
    </>
  )
}

export default FAQ
