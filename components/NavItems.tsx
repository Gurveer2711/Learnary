'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Companions', href: '/companions' },
    { label: 'My Journey', href: '/my-journey' },
];

const NavItems = () => {
    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navItems.map(({ label, href }) => {
                const isActive = pathname === href;

                return (
                    <Link
                        key={label}
                        href={href}
                        className={isActive ? 'text-primary font-semibold' : ''}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavItems;
