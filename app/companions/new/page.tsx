import CompanionForm from "@/components/CompanionForm"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";

const CompanionBuilder = async () => {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');
  return (
    <main className="bg-gray-100 items-center justify-center font-inter py-12 h-min">
      <article className="w-full min-sm:w-2/4 gap-4 flex flex-col px-4">
        <h1 className="text-2xl font-semibold">Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  )
}

export default CompanionBuilder
