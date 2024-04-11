"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className="w-auto h-auto mx-[5.4rem] my-[4.4rem] items-center flex ">
      <div className="flex">
        <Link className="mt-2" href=""><Image src='/brief-logo.svg' alt="logo" width={109} height={60} /></Link>
        <h1 className="pt-[15px] mx-3 font-bold">|</h1>
      </div>
      <div className="flex flex-row w-full items-center justify-between">
        <nav className="flex flex-row pt-[22px] gap-6 font-semibold">
          <Link href="">Stories</Link>
          <Link href="">Creator</Link>
          <Link href="">Community</Link>
          <Link href="">Subscribe</Link>
        </nav>

        <nav className="flex flex-row items-center gap-6 mt-6">
          <Link href="" className="flex flex-row"><Image src="/square-nav.svg" alt="square" width={40} height={40} />
          <span className="flex items-center font-bold ">
            Write
          </span></Link>
          <Link href=""><Image src="/save-nav.svg" alt="save" width={29} height={28} /></Link>
          <Link href=""><Image src="/bell-nav.svg" alt="bell" width={24} height={30} /></Link>
          <Link href="">
           <Image src="/profile-pic.svg" alt="profile" width={80} height={80} />
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Menu