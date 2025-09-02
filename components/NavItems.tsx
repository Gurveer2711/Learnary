'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Lessons', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-2 sm:gap-3">
            {navItems.map(({ label, href }) => {
                const isActive = pathname === href;

                return (
                    <Link
                        key={label}
                        href={href}
                        className={isActive ? 'text-[#1E3A8A] font-semibold' : 'hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10 rounded-md px-2 py-1 transition-colors'}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavItems;
