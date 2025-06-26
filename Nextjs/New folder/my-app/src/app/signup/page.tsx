"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signuppage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/signup", user); // Adjust endpoint as needed
      console.log("Signup successful:", response.data);
      router.push("/login"); // Redirect to login or dashboard
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>

        <label htmlFor="username" className="block mb-1 font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter username"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="Enter email"
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <label htmlFor="password" className="block mb-1 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Enter password"
          className="w-full p-3 mb-6 border rounded-md focus:outline-none focus:border-blue-500"
        />

        <button
          onClick={onSignup}
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Sign Up
        </button>

        <p className="text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
