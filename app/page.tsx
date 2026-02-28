import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Shop from '@/components/Shop'
import Lookbook from '@/components/Lookbook'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Shop />
      <Lookbook />
      <Newsletter />
      <Footer />
    </main>
  )
}