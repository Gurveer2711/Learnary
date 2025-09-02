import CompanionCard from "@/components/LessonCard";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import Link from "next/link";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";
  const companions = await getAllCompanions({ subject, topic });
  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Lesson Library</h1>
        <div className="flex gap-2 sm:gap-4 items-center">
          <SearchInput />
          <SubjectFilter/>
          <Link href="/companions/new" className="shrink-0">
            <button className="btn-primary">New Lesson</button>
          </Link>
        </div>
       
      </section>
      <section className="companion-grid gap-4 flex flex-row flex-wrap">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary;