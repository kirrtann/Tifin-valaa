"use client"
import React from 'react'
import Navbar from '../navbar/page'
import useAuth from '../auth/page';
import { TifinDetail } from '../detail/page';
import Footer from '../footer/page';


const Main = () => {
    const isAuthenticated = useAuth();
    if (!isAuthenticated) {
        return <div>...loading</div>
    }
    return (
        <>
            <div className='max-w-[940px] mx-auto'>
                <div>
                    <Navbar />
                </div>
                <div className='mt-[70px] sm:mt-[30px]  '>
                    <div className='bg-[url("https://t4.ftcdn.net/jpg/09/14/04/91/360_F_914049154_beKtlm5YbwsysvupFSQoNvEI9FuVq1hC.jpg")] max-w-[940px] h-[300px]   bg-cover bg-center'  >
                    </div>
                </div>
                <div className='max-w-[940px] mx-2 sm:mx-0 '>
                    <div className='mt-[10px]'>
                        <h1 className='sm:text-[36px] text-[28px]' >Find Your Nearest Tifin</h1>
                    </div>
                    <div className='flex  flex-wrap sm:flex-nowrap  gap-3 justify-center'>

                        <TifinDetail />
                        <TifinDetail />
                        <TifinDetail />
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
            <Footer/>
        </>
    )

}

export default Main