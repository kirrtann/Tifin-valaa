import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const TifinDetail = () => {
  return (
    <>
      <div className='w-full'>
        <div className='border w-full  rounded-lg'>
          <Image src={"/images.jpeg"} width={300} height={50} alt='servis Provider' className='w-full sm:h-[150px] h-[250px] bg-cover rounded-t-xl object-cover  object-center' />
          <Link href={"/login"}>
            <div className='px-3 py-1'>
              <h3 className='text-[20px]'>Provider Name</h3>
              <h5 className='text-[18px]'>Contact No...</h5>
              <h5>address</h5>
              <div>
                Rating:4.5
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
