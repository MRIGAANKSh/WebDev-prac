"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.error("Logout error:", error.message);
      toast.error(error.message || "Logout failed");
    }
  };

  const getUserDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/users/me");
      setUserId(res.data.data._id);
      toast.success("User data fetched");
    } catch (error: any) {
      console.error("User fetch error:", error.message);
      toast.error(error.message || "Failed to get user details");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 px-4 ">
      <div className=" p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4">Profile</h1>
        <p className="mb-4 text-gray-700">Welcome to your profile page.</p>

        <h2 className="p-2 mb-4 rounded bg-green-100 text-green-700 text-sm break-all">
          {userId ? (
            <Link href={`/profile/${userId}`} className="hover:underline">
              {userId}
            </Link>
          ) : (
            "No user data yet"
          )}
        </h2>

        <button
          onClick={logout}
          className="w-full bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 mb-4 transition"
        >
          Logout
        </button>

        <button
          onClick={getUserDetails}
          disabled={loading}
          className={`w-full ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          } text-white font-semibold py-2 px-4 rounded transition`}
        >
          {loading ? "Fetching..." : "Get User Details"}
        </button>
      </div>
    </div>
  );
}
