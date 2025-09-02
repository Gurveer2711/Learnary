import { getCompanion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import CompanionComponent from "@/components/LessonComponent";
interface CompanionSessionPageProps{
  params: Promise<{ id: string }>
}


const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  const companion = await getCompanion(id);
  const user = await currentUser();
  const {name, subject, topic, duration } = companion;
  if (!user) {
    redirect('/sign-in');
  }
  if (!companion) {
    redirect('/companions');
  }
  
  return (
    <main>
      <article className="flex rounded-md border-black border-2 justify-between p-6 max-md:flex-col">
        <div className="flex items-center gap-2">
          <div
            className="size-[72px] flex items-center justify-center rounded-md"
            style={{backgroundColor:getSubjectColor(subject)}}
          >
            <Image
              src={`/icons/${subject}.svg`}
              alt={subject}
              width={35}
              height={35}
            />
          </div>
          
          <div className="flex flex-row gap-2">
            <div className="flex flex-col items-left gap-2">
              <p className="font-bold text-2xl">{name}</p>
              <p className="text-md">Topic: {topic}</p>
            </div>
            <div className="subject-badge max-h-7">{subject}</div>
          </div>
        </div>
        <div className="text-md"><span className="font-semibold">Duration: </span>{duration} Mins</div>
      </article>
      <CompanionComponent
        {...companion}
        companionId={id}
        userName={user.firstName}
        userImage={user.imageUrl}
      />
    </main>
  )
}

export default CompanionSession;