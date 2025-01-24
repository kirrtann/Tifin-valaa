"use client"
import React from 'react'
import Navbar from '../navbar/page'

import { useRouter } from 'next/navigation';


const Userprofile = () => {
  const Uname = localStorage.getItem('email')
  return (

    <>
      <Navbar />
      <div className='max-w-[940px] mx-auto '>

        <div className='text-[24px] text-center'>
          hello  {Uname}
        </div>
      </div>
    </>
  )
}

export default Userprofile