import Cards from '@/components/cards/Cards'
import Content from '@/components/content/Content'
import Testimonials from '@/components/testimonials/Testimonials'
import LandingHero from '@/components/hero/LandingHero'
import text from '@/utils/en-US.json'
import Coaching from '@/components/coaching/Coaching'
import FAQ from '@/components/FAQ/FAQ'
import SecondaryHero from '@/components/secondaryHero/SecondaryHero'
import FitrApp from '@/components/fitrApp/FitrApp'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <LandingHero text={text['hero.text1']} />
      <Content />
      <SecondaryHero text={text['hero.text2']} />
      <Cards />
      <FitrApp />
      <Testimonials />
      <Coaching />
      <FAQ />
    </main>
  )
}
