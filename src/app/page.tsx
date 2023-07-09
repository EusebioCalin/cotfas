import Cards from '@/components/Cards'
import Content from '@/components/content/Content'
import Testimonials from '@/components/testimonials/Testimonials'
import LandingHero from '@/components/hero/LandingHero'
import SecondaryHero from '@/components/hero/SecondaryHero'
import text from '@/utils/en-US.json'
import Coaching from '@/components/coaching/Coaching'
import FAQ from '@/components/FAQ/FAQ'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <LandingHero text={text['hero.text1']} />
      <Content />
      <SecondaryHero text={text['hero.text2']} />
      <Cards />
      <Testimonials />
      <Coaching />
      <FAQ />
    </main>
  )
}
