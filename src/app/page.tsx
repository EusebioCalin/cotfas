import Cards from '@/components/Cards'
import Content from '@/components/content/Content'
import LandingHero from '@/components/hero/LandingHero'
import SecondaryHero from '@/components/hero/SecondaryHero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <LandingHero
        text='Unlock Your Potential and Move Better for Life
'
      />
      <Content />
      <SecondaryHero text='Why Choose My Personal Training Program?' />
      <Cards />
    </main>
  )
}
