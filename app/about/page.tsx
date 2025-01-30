"use client"

import React from "react"
import Navbar from "../navbar/page"
import { Utensils, Users, Truck, Star } from "lucide-react"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">About Tiffin-Valaa</h1>
        <p className="text-xl text-gray-600 mb-12">
          We connect hungry customers with the best local tiffin providers, bringing homemade meals right to your
          doorstep.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              At Tiffin-Valaa, we're on a mission to make delicious, home-cooked meals accessible to everyone. We
              believe in the power of good food to bring people together and make life a little bit easier.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              We envision a world where everyone can enjoy the comfort of home-cooked meals, regardless of their cooking
              skills or time constraints. We're working towards creating a thriving ecosystem of local tiffin providers
              and satisfied customers.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Utensils className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Diverse Cuisine</h3>
            <p className="text-gray-600">Wide variety of local and international dishes to choose from.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Verified Providers</h3>
            <p className="text-gray-600">All our tiffin providers are carefully vetted for quality and hygiene.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Truck className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Delivery</h3>
            <p className="text-gray-600">Timely and efficient delivery to ensure your meals arrive fresh.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">We maintain high standards to ensure customer satisfaction.</p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Tiffin-Valaa?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Convenient access to home-cooked meals</li>
            <li>Support local tiffin providers and home chefs</li>
            <li>Flexible meal plans to suit your needs</li>
            <li>Easy ordering process through our user-friendly platform</li>
            <li>Transparent pricing with no hidden fees</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About

