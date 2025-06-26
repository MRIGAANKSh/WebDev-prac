"use client";

import React, { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState<{ username: string; email: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to get user data
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/profile"); // Replace with your actual API
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to load user profile:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <p className="text-lg font-semibold text-red-600">User not found or not logged in.</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Profile</h1>
        <div className="text-lg">
          <p className="mb-2">
            <strong>Username:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
    </div>
  );
}
