import CompanionForm from "@/components/CompanionForm"

const CompanionBuilder = () => {
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
