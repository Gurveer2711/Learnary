import CompanionCard from '@/components/CompanionCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants';
const Page = () => {
  return (
    <main>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <section className='home-section'>
        <CompanionCard
          id="123"
          subject="Science"
          name="Neura the brainy explorer"
          topic="Neural network of the brain"
          duration={45}
          color="#E5D0FF"
        />
        <CompanionCard
          id="123"
          subject="Maths"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          duration={30}
          color="#FFDA6E"
        />
        <CompanionCard
          id="123"
          subject="Language"
          name="Verba the Vocabulary Builder"
          topic="English Literature "
          duration={30}
          color="#BDE7FF"
        />
      </section>
      <section className='home-section'>
        <CompanionList
          companions={recentSessions}
          classNames="w-3/4 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page