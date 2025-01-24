"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error messages
  const [success, setSuccess] = useState(""); // For success messages

  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobileNumber = (tel: string) => {
    const mobileRegex = /^[0-9]{10}$/; // Validates a 10-digit mobile number
    return mobileRegex.test(tel);
  };

  const validateName = (name: string) => {
    if (name.trim().length < 3) {
      return "Name must be at least 3 characters long.";
    }
    return "";
  };

  const validateAddress = (address: string) => {
    if (address.trim().length < 5) {
      return "Address must be at least 5 characters long.";
    }
    return "";
  };

  const validatePassword = (password: string) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return "Password must contain at least one special character (!@#$%^&*).";
    }
    return "";
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault(); // Prevent form's default submission behavior
    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData(event.target);
    const email = formData.get("email") as string;
    const mobile_number = formData.get("mobile_number") as string;
    const name = formData.get("name") as string;
    const address = formData.get("address") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("conformpassword") as string;

    // Validate email, number, name, address, and password
    if (!validateEmail(email)) {
      console.log("Done");

      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!validateMobileNumber(mobile_number)) {
      setError("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }

    const nameError = validateName(name);
    if (nameError) {
      setError(nameError);
      setLoading(false);
      return;
    }

    const addressError = validateAddress(address);
    if (addressError) {
      setError(addressError);
      setLoading(false);
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    const credentials = { email, password, name, mobile_number, address };


    try {
      const response = await axios.post("http://localhost:4000/api/auth/signup", credentials);

      if (response.status === 201) {
        setSuccess("Account created successfully!");
        router.push("/login");
      }
    } catch (err: any) {
      if (err.response && err.response.data) {
        console.log(err.response.data);
        
        setError(err.response.data.message || "Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="mobile_Number" className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobile_number"
            id="mobile_number"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="Address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="conformpassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="text"
            name="conformpassword"
            id="conformpassword"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={loading}
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
      <div className="text-center mt-4">
        <Link href="/login" className="text-sm text-blue-600 hover:underline">
          Already have an account? <span className="font-medium">Log In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
      {success && <p className="text-green-500 text-sm mt-4">{success}</p>}
    </div>
  );
}
