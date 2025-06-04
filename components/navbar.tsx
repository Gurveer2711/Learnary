import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
      <nav className="navbar">
      <Link href="/">
        <div className="">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={46}
            height={44}
          />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <p>Home</p>
        <p>Learning Companions</p>
        <p>My Journey</p>
        <p>Sign In</p>
      </div>
    </nav>
  )
}

export default Navbar