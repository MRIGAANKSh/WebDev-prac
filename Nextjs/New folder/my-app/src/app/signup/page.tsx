"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup successful!");
      router.push("/login");
    } catch (error: any) {
      console.error("Signup failed", error.message);
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { email, password, username } = user;
    setButtonDisabled(!(email && password && username));
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen text-white px-4">
      <div className="w-full max-w-md  rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          {loading ? "Processing..." : "Sign Up"}
        </h1>

        <label htmlFor="username" className="block mb-1 font-medium">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Enter username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />

        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />

        <label htmlFor="password" className="block mb-1 font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Enter password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className="w-full p-3 mb-6 border rounded-md focus:outline-none focus:border-blue-500 text-black"
        />

        <button
          onClick={onSignup}
          disabled={buttonDisabled || loading}
          className={`w-full p-3 rounded-md text-white transition duration-300 ${
            buttonDisabled || loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
