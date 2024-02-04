import Hero from '@/components/Hero'
import Newest from '@/components/Newest'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-white pb-6 sm:pb8 lg:pb-12'>
      <Hero />
      <Newest/>
    </div>
  )
}
