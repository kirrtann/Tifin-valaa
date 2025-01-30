"use client"

import React from "react"
import Navbar from "../navbar/page"
import { Phone, Mail } from "lucide-react"

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Contact Us</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <p className="text-lg text-gray-700 mb-6">
              We're here to help! If you have any questions or concerns, please don't hesitate to reach out to us.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Phone</p>
                  <p className="text-lg font-semibold text-gray-900">9988774455</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-gray-400 mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-gray-900">contact@Tifinvalaa.com</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-base text-gray-700">
                Feel free to call us if you have any immediate concerns. If we're unable to answer, please send us an
                email and we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

