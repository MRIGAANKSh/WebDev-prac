"use client";

import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerified(true);
    } catch (err: any) {
      setError(true);
      console.error("Verification error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    const urlToken = new URLSearchParams(window.location.search).get("token");
    if (urlToken) {
      setToken(urlToken);
    }
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen  px-4">
      <div className=" shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">Verify Your Email</h1>

        {verified && (
          <div>
            <h2 className="text-xl text-green-600 font-semibold mb-4">
              🎉 Your email has been successfully verified!
            </h2>
            <Link
              href="/login"
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Go to Login
            </Link>
          </div>
        )}

        {error && (
          <div className="mt-4">
            <h2 className="text-xl text-red-600 font-semibold">
              ❌ Verification failed. Token may be invalid or expired.
            </h2>
          </div>
        )}

        {!verified && !error && (
          <p className="text-gray-600">Verifying your email, please wait...</p>
        )}
      </div>
    </div>
  );
}
