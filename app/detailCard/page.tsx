import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Star } from "lucide-react"

export const TifinDetail = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href="/login" className="block">
        <div className="relative h-48 sm:h-56">
          <Image
            src="/images.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Service Provider"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Provider Name</h3>
          <p className="text-gray-600 mb-1">Contact: 123-456-7890</p>
          <p className="text-gray-600 mb-2">123 Main St, City, State</p>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-700">4.5</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

