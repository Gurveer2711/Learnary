import CompanionCard from '@/components/CompanionCard'
import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionList from '@/components/CompanionList'
import Cta from '@/components/Cta'
import { recentSessions } from '@/constants';
import { getAllCompanions, getRecentSession } from '@/lib/actions/companion.actions'
import { getSubjectColor } from '@/lib/utils'
const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionCompanions = await getRecentSession(6);
  return (
    <main>
      <h1 className='text-2xl font-bold'>Dashboard</h1>
      <section className='home-section'>
        {
          companions.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          ))
        }
        
      </section>
      <section className='home-section'>
        <CompanionList
          companions={recentSessionCompanions}
          classNames="w-3/4 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page