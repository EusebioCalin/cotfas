'use client'
import { Disclosure } from '@headlessui/react'

import texts from '@/utils/en-US.json'

export const FAQ = () => {
  return (
    <>
      <section className='max-w-screen-xl grid-cols-1 text-center md:px-0'>
        <div className='my-16 flex flex-col content-center items-center'>
          <h1 className='font-semibold leading-8 uppercase text-3xl text-color-secondary'>
            {texts['faq.title']}
          </h1>
        </div>
        <div className='mx-auto w-full max-w-xl rounded-2xlp-2'>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between rounded-lg bg-color-primary px-4 py-2 text-left text-sm font-medium text-white hover:text-color-secondary focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
                  <span>What is your refund policy?</span>
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-white'>
                  {texts['faq.text']}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as='div' className='mt-2'>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between rounded-lg bg-color-primary px-4 py-2 text-left text-sm font-medium text-white hover:text-color-secondary focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'>
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
