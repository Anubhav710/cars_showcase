import React from "react"
import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-6 sm:px-16 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            height={18}
            width={118}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="submit"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  )
}

export default Navbar
