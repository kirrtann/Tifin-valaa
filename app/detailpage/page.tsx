import Image from 'next/image'
import React from 'react'
import Navbar from '../navbar/page'

const DetailPage = () => {

  return (
    <>
      <Navbar />
      <div className='max-w-[940px] mt-[100px] mx-auto'>
        <div>
        </div>
        <div>
          <div className='w-fit flex'>
            <div className=' w-full flex '>
              <div>
                <Image src={"/images.jpeg"} width={300} height={50} alt='servis Provider' className='rounded-lg  h-[250px] bg-cover object-cover  object-center' />
              </div>
              <div className='pl-5'>
                <h3 className='text-[28px]'>Provider Name</h3>
                <h5 className='text-[24px]'>Contact No...</h5>
                <h5 className='text-[20px]'>address</h5>
                <div className='text-[20px]'>
                  Rating:4.5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailPage