'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [usermenu, setUsermenu] = useState(false)
  const loginCheck = localStorage.getItem('token')
  const Uname = localStorage.getItem("email")
  const Role = localStorage.getItem("role")
  const route = useRouter()
  const Logout = () => {
    localStorage.setItem('token', "")
    localStorage.setItem('email', "")
    localStorage.setItem('role', "")

    route.push("/login")
  }
  return (
    <>
      <div className=''>
        <nav className="max-w-[940px] mx-auto relative  font-karla  ">
          <div className="container mx-auto  sm:flex items-center justify-between py-6 px-4 sm:px-6 md:px-8 font-karla">
            <div className='flex  '>
              <div className='text-2xl font-serif font-bold '>
                Tifin-Valaa
              </div>
              <div className='flex ml-[50px] absolute end-0'>
                <button
                  className="lg:hidden   text-gray-500 hover:text-gray-800 focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
                <div className=''>

                  <ul className="hidden lg:flex gap-5 tracking-[1px] py-[2px] font-serif  font-bold  text-[16px]">
                    <li>
                      <Link href="/" className=" font-semibold">
                        Home
                      </Link>
                    </li>

                    <li>
                      <Link href="/about" className="">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                {
                  !loginCheck ? (
                    <div className='m-[2px]'>
                      <Link href={"/login"} >
                        <button className='  border  font-bold text-[14px] py-[2px] tracking-[1px] bg-green-500 text-white px-[5px] rounded-md'>
                          Login
                        </button>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <button onClick={() => { setUsermenu(!usermenu) }}  >
                        <div className=" px-2 text-[18px] ml-[10px] text-white rounded-full bg-red-600 place-items-center ">
                          {Uname?.[0]}
                        </div>
                      </button>
                    </div>
                  )
                }
              </div>
            </div>
            <div className=' mx-1 absolute sm:relative md:right-[30%] sm:mt-[0px]  mt-[20px]  '>
              <form className=" mx-auto">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" className="block bg-transparent w-full p-3 outline-none ps-10 text-sm text-gray-900 border border-gray-400 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Where You" required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2 bg-green-500   font-medium rounded-lg text-[16px] px-4  py-1 dark:bg-blue-600 dark:hover:bg-blue-700 tracking-[1px] font-serif ">Get Tifin </button>
                </div>
              </form>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-white shadow-md absolute top-16   left-0 w-full z-40">
              <ul className="flex flex-col items-center space-y-4 py-6 text-sm font-medium text-gray-500">
                <li>
                  <Link
                    href="/"
                    className=""
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    HOME
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className=""
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className=""
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    CONTACT
                  </Link>
                </li>

              </ul>

            </div>
          )}

        </nav>
      </div>
      <div className='max-w-[940px] mx-auto justify-items-end mt-[-20px]'>
        {
          (usermenu && Role === "user") ? (
            <div className='w-fit bg-blue-600 p-[10px] text-white tracking-[1px] '>
              <ul>
                {/* <li>
                  <Link href={"/profile"}>Setting</Link>
                </li> */}
                <li>
                  <button onClick={Logout} className=''>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) :
            (
              usermenu && Role === "provider" && (
                <div className='w-fit bg-blue-600 p-[10px] text-white tracking-[1px] '>
                <ul>
                  <li>
                    <Link href={"/provider"}>Setting</Link>
                  </li>
                  <li>
                    <button onClick={Logout} className=''>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
              )
            )
        }
      </div>
    </>
  )
}

export default Navbar