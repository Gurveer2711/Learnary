  import { currentUser } from "@clerk/nextjs/server";
  import { redirect } from "next/navigation";
  import Image from "next/image";
  import { getUserSession, getUserCompanions } from "@/lib/actions/companion.actions";
  import CompanionList from "@/components/CompanionList";
import { getRecentSession } from "@/lib/actions/companion.actions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
  const Profile = async () => {
    const user = await currentUser();
    if (!user) {
      redirect('/sign-in');
    }

    const userSessions = await getUserSession(user.id);
    const userCompanions = await getUserCompanions(user.id);
    
    return (
      <main className="bg-gray-50 px-12">
        <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          {/* User Info */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Image
              src={user?.imageUrl}
              alt={user?.firstName || "User"}
              height={80}
              width={80}
              className="rounded-lg object-cover"
            />
            <div className="flex flex-col text-center sm:text-left">
              <h2 className="text-2xl font-semibold">{user?.firstName}</h2>
              <p className="text-lg text-gray-600">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            {/* Lessons Completed */}
            <div className="flex flex-col gap-2 border-2 border-black rounded-md p-4 w-64">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/check.svg"
                  alt="Check"
                  width={30}
                  height={30}
                />
                <h2 className="text-3xl font-semibold">{userSessions.length}</h2>
              </div>
              <p className="text-md text-gray-700">Lessons Completed</p>
            </div>

            {/* Companions Created */}
            <div className="flex flex-col gap-2 border-2 border-black rounded-md p-4 w-64">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/cap.svg"
                  alt="Companions"
                  width={30}
                  height={30}
                />
                <h2 className="text-3xl font-semibold">{userCompanions.length}</h2>
              </div>
              <p className="text-md text-gray-700">Companions Created</p>
            </div>
          </div>
        </section>
        <section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl md:text-3xl">Lessons Completed</AccordionTrigger>
            <AccordionContent>
                <CompanionList
                  companions={userSessions}
                  title = "Lessons Completed"
                  classNames="w-full rounded-lg"
                />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
          
        </section>
        <section>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl md:text-3xl">Companions Created</AccordionTrigger>
            <AccordionContent>
                <CompanionList
                  companions={userCompanions}
                  title="Companions Created"
                  classNames="w-full rounded-lg"
                />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
          
        </section>
      </main>
    );
  };

  export default Profile;
