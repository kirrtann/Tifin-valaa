"use client"

import Image from "next/image"
import React from "react"
import Navbar from "../navbar/page"
import { Star, Phone, MapPin, Clock, DollarSign, Utensils } from "lucide-react"

const DetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                src="/images.jpeg"
                width={400}
                height={400}
                alt="Service Provider"
                className="h-full w-full object-cover md:w-48"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Tiffin Service</div>
              <h1 className="mt-2 text-3xl font-bold text-gray-900">Provider Name</h1>
              <div className="mt-4 flex items-center">
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-yellow-400" />
                <Star className="h-5 w-5 text-gray-300" />
                <span className="ml-2 text-gray-600">4.5 (128 reviews)</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Main St, Anytown, ST 12345</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Open: 9:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-6 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-gray-600 mb-4">
              We are a family-owned tiffin service provider, offering delicious and healthy home-cooked meals. Our
              passion is to bring the taste of home to your doorstep, using fresh ingredients and authentic recipes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center bg-white p-4 rounded-lg shadow">
                <DollarSign className="h-6 w-6 text-green-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Pricing</h3>
                  <p className="text-gray-600">Starting from $8.99 per meal</p>
                </div>
              </div>
              <div className="flex items-center bg-white p-4 rounded-lg shadow">
                <Utensils className="h-6 w-6 text-blue-500 mr-3" />
                <div>
                  <h3 className="font-semibold text-gray-900">Cuisine</h3>
                  <p className="text-gray-600">Indian, Chinese, Continental</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Menu Highlights</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Vegetarian Thali</li>
              <li>Butter Chicken with Naan</li>
              <li>Paneer Tikka Masala</li>
              <li>Vegetable Biryani</li>
              <li>Dal Makhani</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage

