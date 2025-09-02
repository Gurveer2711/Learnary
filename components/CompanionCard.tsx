import Image from "next/image";
import Link from "next/link";
import { getSubjectColor } from "@/lib/utils";

interface CompanionCardProps {
  id: string;
  name: string;
  subject: string;
  topic: string;
  duration: number;
  color: string;
}

const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
  const bg = getSubjectColor(subject) || color;
  return (
    <article className="companion-card shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 text-black" style={{ backgroundColor: bg }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge bg-black text-white">{subject}</div>
        <button className="companion-bookmark bg-black text-white">
          <Image
            src="/icons/bookmark.svg"
            alt="bookmark"
            width={12}
            height={15}
          />
        </button>
      </div>
      <h2 className="font-semibold text-xl sm:text-2xl tracking-tight">{name}</h2>
      <p className="text-sm text-black/70">Topic: {topic}</p>
      <div className="flex items-center gap-2">
        <Image
          src="/icons/clock.svg"
          alt="duration"
          width={13.5}
          height={13.5}
        />
        <p className="text-sm text-black/70">Duration: {duration} minutes</p>
      </div>
      <Link
        href={`/companions/${id}`}
        className="w-full"
      >
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  )
}

export default CompanionCard