import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
const CompanionBuilder = async () => {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in');
  const canCreateCompanion = await newCompanionPermissions();
  return (
    <main className="bg-gray-100 items-center justify-center font-inter py-12 h-min">
      {canCreateCompanion ? (<article className="w-full min-sm:w-2/4 gap-4 flex flex-col px-4">
        <h1 className="text-2xl font-semibold">Companion Builder</h1>
        <CompanionForm />
      </article>) :
        (
          <article className="items-center justify-center flex flex-col gap-4 w-full min-2xl:w-1/2 pt-20 text-center">
            <Image
              src="/images/limit.svg"
              alt="Companion Limit Reached"
              width={300}
              height={200}
            />
            <div className="cta-badge">
              Upgrade Your Plan
            </div>
            <h1>You have Reached Your Limit</h1>
            <p>You have reached your companion limit.Upgrade to create more companions and premium features</p>
            <Link
              href="/subscription"
              className="btn-primary w-full justify-center">
              Upgrade My Plan
            </Link>
          </article>
        )
      }
    </main>
  )
}

export default CompanionBuilder
