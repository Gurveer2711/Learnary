import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
interface Companion {
    id: string;
    topic: string;
    subject: string;
    duration: string;
    name: string;
    color: string;
}

interface CompanionListProps {
    companions?: Companion[];
    classNames?: string;
}
const CompanionList = ({ companions, classNames }: CompanionListProps) => {
    return (
        <article className={cn('companion-list', classNames)}>
            <h2 className="text-xl sm:text-2xl font-bold">Recently Completed Lessons</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-lg w-2/3">Lessons</TableHead>
                        <TableHead className="text-lg">Subject</TableHead>
                        <TableHead className="text-lg text-right">Duration</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions?.map(({ id, subject, duration, topic, name, color }) => (
                        <TableRow key={id}>
                            <TableCell>
                                <Link
                                    href={`/companions/${id}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <div
                                            className="size-[72px] flex items-center rounded-lg justify-center max-sm:hidden"
                                            style={{ backgroundColor: color }}
                                        >
                                            <Image
                                                src={`/icons/${subject}.svg`}
                                                alt={subject}
                                                width={35}
                                                height={35}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <p className="font-bold text-2xl">{name}</p>
                                            <p className="text-lg">Topic: {topic}</p>
                                        </div>
                                    </div>


                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className="subject-badge w-fit">{subject}</div></TableCell>
                            <TableCell>
                                <div className="text-sm text-center">
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
}

export default CompanionList;