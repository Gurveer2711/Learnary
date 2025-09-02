import Image from "next/image"
import Link from "next/link"

const Cta = () => {
  return (
    <section className="cta-section mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="cta-badge font-medium">Start learning your way.</div>
      <h2 className="text-3xl font-bold tracking-tight">Build a Personalize Learning Companion</h2>
      <p className="px-8 text-white/90">Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.</p>
      <Image
        src="/images/cta.svg"
      alt="cta"
      width={330}
      height={330}
      />
      <Link
        href={'/companions/new'}
        className="w-full"
      >
        <button className="btn-primary w-full justify-center">
          <span>
            <Image
              src="/icons/plus.svg"
              alt="plus"
              width={12}
              height={12}
            />
          </span>
          Build New Companion
        </button>
      </Link>
    </section>
  )
}

export default Cta