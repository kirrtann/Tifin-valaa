"use client"

import { useEffect, useState, useCallback } from "react"
import Navbar from "../navbar/page"
import axios from "axios"
import { Loader2, PenSquare, User, Phone, MapPin, Mail } from "lucide-react"
import type React from "react"

const ProviderPage = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [userdata, setUserData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [editForm, setEditForm] = useState<any>(null)
  const API = "http://localhost:4000/profiledata"

  const fetchData = useCallback(async () => {
    if (!email) return
    try {
      const response = await axios.get(`${API}/userdata`, {
        params: { email },
      })
      setUserData(response.data)
      setEditForm(response.data)
    } catch (error) {
      console.error("Error fetching data:", error)
    } finally {
      setIsLoading(false)
    }
  }, [email])

  useEffect(() => {
    const storedEmail = localStorage.getItem("email")
    setEmail(storedEmail)
  }, [])

  useEffect(() => {
    if (email) {
      fetchData()
    }
  }, [email, fetchData])

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setEditForm(userdata)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditForm((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      console.log(editForm);

      const response = await axios.put(`${API}/updatedata`, editForm)
      console.log(response.data);

      setUserData(response.data)
      setIsEditing(false)
    } catch (error) {
      console.error("Error updating data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Provider Profile</h2>
              {!isEditing && (
                <button
                  onClick={handleEditClick}
                  className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  <PenSquare className="h-5 w-5" />
                  <span>Edit</span>
                </button>
              )}
            </div>
            {isLoading ? (
              <div className="flex justify-center items-center h-48">
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
              </div>
            ) : isEditing ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <EditFormItem icon={User} label="Name" name="name" value={editForm.name} onChange={handleInputChange} />
                <EditFormItem
                  icon={Phone}
                  label="Contact Number"
                  name="mobile_number"
                  value={editForm.mobile_number}
                  onChange={handleInputChange}
                />
                <EditFormItem
                  icon={Mail}
                  label="Email"
                  name="email"
                  value={editForm.email || email || ""}
                  onChange={handleInputChange}
                  disabled={true}
                />
                <EditFormItem
                  icon={MapPin}
                  label="Address"
                  name="address"
                  value={editForm.address}
                  onChange={handleInputChange}
                />
                <div className="flex justify-end space-x-2 mt-4">
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            ) : userdata ? (
              <div className="space-y-4">
                <ProfileItem icon={User} label="Name" value={userdata.name} />
                <ProfileItem icon={Phone} label="Contact Number" value={userdata.mobile_number} />
                <ProfileItem icon={Mail} label="Email" value={userdata.email || email || ""} />
                <ProfileItem icon={MapPin} label="Address" value={userdata.address} />
              </div>
            ) : (
              <p className="text-center text-gray-500">No user data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProfileItemProps {
  icon: React.ElementType
  label: string
  value: string
}

const ProfileItem: React.FC<ProfileItemProps> = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg transition duration-300 hover:bg-gray-100">
    <Icon className="h-6 w-6 text-blue-500" />
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="text-lg font-semibold text-gray-800">{value}</p>
    </div>
  </div>
)

interface EditFormItemProps extends ProfileItemProps {
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const EditFormItem: React.FC<EditFormItemProps> = ({ icon: Icon, label, name, value, onChange, disabled = false }) => (
  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
    <Icon className="h-6 w-6 text-blue-500" />
    <div className="flex-grow">
      <label htmlFor={name} className="block text-sm font-medium text-gray-500">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`mt-1 block w-full outline-none px-2 py-2 rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}`}
      />
    </div>
  </div>
)

export default ProviderPage

