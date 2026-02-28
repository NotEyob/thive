import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Shop from '@/components/Shop'
import Lookbook from '@/components/Lookbook'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Shop />
      <Lookbook />
      <Footer />
    </main>
  )
}