import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Hello, {username}!</h1>
        <p className="text-gray-700 mb-6">
          Welcome to your profile page. This page is dynamically generated based on the username in the URL.
        </p>

        {/* Add more user info or components here */}
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-2">User Details:</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Username: <span className="font-mono">{username}</span></li>
            <li>Email: <span className="italic text-gray-500">user@example.com</span></li>
            <li>Member since: <span>January 2023</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User;
