'use client'
import { useRef, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'
import cn from 'classnames'
import styles from './hero.module.scss'

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
function useVisibility<Element extends HTMLElement>(
  offset = 0,
  throttleMilliseconds = 100,
): [Boolean, React.RefObject<Element>] {
  const [isVisible, setIsVisible] = useState(false)
  const currentElement = useRef<Element>()

  const onScroll = throttle(() => {
    if (!currentElement.current) {
      setIsVisible(false)
      return
    }
    const top = currentElement.current.getBoundingClientRect().top
    setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight)
  }, throttleMilliseconds)

  useEffect(() => {
    document.addEventListener('scroll', onScroll, true)
    return () => document.removeEventListener('scroll', onScroll, true)
  })

  //@ts-ignore
  return [isVisible, currentElement]
}

export const SliderHero = ({ text }: { text: string }) => {
  const [isVisible, currentElement] = useVisibility<HTMLDivElement>(100)

  return (
    <>
      <section ref={currentElement} className='w-full text-left relative'>
        <div className='w-full bg-center text-white md:bg-fixed bg-cover bg-hero2-image min-h-[60vh] md:min-h-[50vh]'>
          <div className='absolute top-1/2 md:top-1/2 md:mt-1/2 md:w-1/2'>
            <h1
              className={cn(
                'secondaryHero leading-10 uppercase text-5xl ml-8',
                isVisible ? styles.showAnim : '',
              )}
            >
              {text}
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderHero
