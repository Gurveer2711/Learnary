import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn, getSubjectColor } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
interface Companion {
    id: string;
    topic: string;
    subject: string;
    duration: string;
    name: string;
}

interface CompanionListProps {
    companions?: Companion[];
    classNames?: string;
    title:string
}
const CompanionList = ({ companions, classNames,title }: CompanionListProps) => {
    return (
        <article className={cn('companion-list bg-card text-card-foreground border-border shadow-sm', classNames)}>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">{title}</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-base sm:text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-base sm:text-lg">Subject</TableHead>
                        <TableHead className="text-base sm:text-lg text-right">Duration</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map(({ id, subject, duration, topic, name }, index) => (
                        <TableRow key={`${id}-${index}`} className="hover:bg-accent/60">
                            <TableCell>
                                <Link
                                    href={`/companions/${id}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="size-[60px] flex items-center rounded-lg justify-center max-sm:hidden"
                                            style={{ backgroundColor: getSubjectColor(subject) }}
                                        >
                                            <Image
                                                src={`/icons/${subject}.svg`}
                                                alt={subject}
                                                width={35}
                                                height={35}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1.5">
                                            <p className="font-semibold text-lg sm:text-xl leading-tight">{name}</p>
                                            <p className="text-sm sm:text-base text-muted-foreground">Topic: {topic}</p>
                                        </div>
                                    </div>


                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="subject-badge w-fit bg-foreground text-background">{subject}</div></TableCell>
                            <TableCell className="md:pl-20">
                                <div className="text-sm text-center text-muted-foreground">
                                    {duration}
                                    <span className="max-md:hidden"> Mins</span>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>

            </Table>
        </article>
    )
};

export default CompanionList;