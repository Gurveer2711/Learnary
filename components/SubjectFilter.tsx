"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"
import { useState,useEffect } from "react"
import { cn } from "@/lib/utils"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { subjects } from "@/constants"
import { formUrlQuery,removeKeysFromUrlQuery } from "@jsmastery/utils"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function SubjectFilter() {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || '';

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    useEffect(() => {
        const delayDebounceFunction = setTimeout(() => {
            if (value) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "subject",
                    value: value,
                });

                router.push(newUrl, { scroll: false });
            }
            else if (pathname === '/companions') {
                const newUrl = removeKeysFromUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ["subject"],
                });

                router.push(newUrl, { scroll: false });
            }
        }, 500);
        
    }, [value,router,searchParams,pathname]);
    return (
        <div className="w-full max-w-md">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between border-2 border-black bg-white hover:bg-slate-50 shadow-sm transition-all"
                    >
                        {value ? value.charAt(0).toUpperCase() + value.slice(1) : "Select Subject"}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                    <Command>
                        <CommandInput placeholder="Search subject..." />
                        <CommandList>
                            <CommandEmpty>No subject found.</CommandEmpty>
                            <CommandGroup className="max-h-64 overflow-y-auto">
                                {subjects.map((subject) => (
                                    <CommandItem
                                        key={subject}
                                        value={subject}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check className={cn("mr-2 h-4 w-4", value === subject ? "opacity-100" : "opacity-0")} />
                                        {subject.charAt(0).toUpperCase() + subject.slice(1)}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    )
}
