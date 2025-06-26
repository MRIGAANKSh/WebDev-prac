"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    try {
      const response = await axios.post("/api/login", user); // Adjust this route
      console.log("Login successful:", response.data);
      router.push("/dashboard"); // Redirect after login
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center ">
      <div className=" p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

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
          onClick={onLogin}
          className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
