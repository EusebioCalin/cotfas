import Cards from '@/components/Cards'
import Content from '@/components/content/Content'
import SliderHero from '@/components/sliderHero/SliderHero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <SliderHero
        image={'bg-hero-image'}
        text='Unlock Your Potential and Move Better for Life
'
      />
      {/* <Content image={'/images/card_1.jpg'} imageLeftAlign={true} /> */}
      {/* <Content image={'/images/card_1.jpg'} imageLeftAlign={false} /> */}
      <SliderHero image={'bg-hero2-image'} text='Why Choose My Personal Training Program?' />
      <Cards />
    </main>
  )
}
