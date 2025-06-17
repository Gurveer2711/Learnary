import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <h3 className="text-3xl font-semibold">Learnary</h3>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          
            <SignInButton mode="modal">
              <button className="text-md font-medium hover:text-white border-2 border-black rounded-xl px-3 py-1 hover:bg-primary ">
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

export default Navbar