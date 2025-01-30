"use client"

import React from "react"
import Navbar from "../navbar/page"
import { TifinDetail } from "../detailCard/page"
import Footer from "../footer/page"

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <div
              className="h-64 sm:h-80 md:h-96 rounded-xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('https://t4.ftcdn.net/jpg/09/14/04/91/360_F_914049154_beKtlm5YbwsysvupFSQoNvEI9FuVq1hC.jpg')",
              }}
            ></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Find Your Nearest Tiffin</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TifinDetail />
            <TifinDetail />
            <TifinDetail />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Main

