'use client'

import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
import { useEffect, useState } from 'react'
import Button from '@/components/button/Button'

const Navbar = () => {
  const navigation = ['Coaching', 'FAQS', 'Contact']
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const handleScroll = (event: Event) => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = winScroll / height
    setScrollPosition(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    ;() => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div
      className={`w-full fixed  top-0 z-10 ${scrollPosition > 0.1 ? 'bg-black' : 'bg-transparent'} 
      transition duration-500 ease-in-out transform hover:bg-black`}
    >
      <nav className='container relative flex flex-wrap items-center justify-between p-4 mx-auto lg:justify-between xl:px-0'>
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap items-center justify-between w-full lg:w-auto'>
                <Link href='/'>
                  <span className='flex items-center space-x-2 text-2xl font-medium text-white'>
                    <span></span>
                    <span>Andrei Cotfas</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label='Toggle Menu'
                  className='px-2 py-1 ml-auto text-white rounded-md lg:hidden hover:text-primary-color focus:text-primary-color focus:outline-none'
                >
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className='flex flex-wrap w-full my-5 lg:hidden'>
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={`#${item.toLocaleLowerCase()}`}
                        className='w-full px-6 py-2 rounded-md text-white hover:text-red-600 focus:text-red-600 focus:bg-gray-800 focus:outline-none'
                      >
                        {item}
                      </Link>
                    ))}

                    <Button text={'Get Started'} onClick={function (): void {}} />
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className='hidden text-center lg:flex lg:items-center'>
          <ul className='items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex'>
            {navigation.map((menu, index) => (
              <li className='mr-3 nav__item' key={index}>
                <Link
                  href={`#${menu.toLocaleLowerCase()}`}
                  className='inline-block px-4 py-2 text-lg font-normal text-white no-underline rounded-md hover:text-color-primary focus:text-color-primary focus:outline-none'
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='hidden mr-3 space-x-4 lg:flex nav__item'>
          <Button text={'Get Started'} onClick={function (): void {}} />
        </div>
      </nav>
    </div>
  )
}

export default Navbar
