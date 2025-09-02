import Link from "next/link";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav className="navbar sticky top-0 z-50 bg-transparent backdrop-blur-0 border-0">
            <Link href="/" className="hover:text-[#1E3A8A] transition-colors">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Learnary</h3>
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
                <NavItems />
                <SignedOut>

                    <SignInButton mode="modal">
                        <button className="text-sm sm:text-md font-medium border border-border rounded-xl px-3 py-1.5 hover:bg-[#1E3A8A] hover:text-white transition-colors">
                            Sign In
                        </button>
                    </SignInButton>

                </SignedOut>
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />
                </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar;
