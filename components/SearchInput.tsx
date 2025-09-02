"use client"

import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('subject') || '';

    const [value, setValue] = useState("");

    useEffect(() => {
        const delayDebounceFunction = setTimeout(() => {
            if (value) {
                const newParams = new URLSearchParams(searchParams);
                newParams.set('topic', value);
                const newUrl = `${pathname}?${newParams.toString()}`;
                router.push(newUrl, { scroll: false });
            }
        }, 500);
        return () => clearTimeout(delayDebounceFunction);
    }, [value, pathname, router, searchParams]);

    return (
        <input
            type="text"
            placeholder="Search Lessons..."
            className="border-2 border-black rounded-4xl px-4 py-2"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default SearchInput