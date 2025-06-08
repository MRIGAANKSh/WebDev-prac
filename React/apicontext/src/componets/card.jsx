import React, { useState } from "react";

const GitHubCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen flex justify-center items-center transition-all`}>
      <div className={`shadow-lg rounded-lg p-6 w-full max-w-sm text-center ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <img
          src="https://avatars.githubusercontent.com/u/143605030?v=4"
          alt="MRIGAANKSh"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500"
        />
        <h2 className="text-2xl font-bold mt-4">Mrigaank Sharma</h2>
        <p className="text-gray-500 dark:text-gray-300">@MRIGAANKSh</p>
        <a
          href="https://github.com/MRIGAANKSh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          View GitHub Profile
        </a>

       
      </div>
    </div>
  );
};

export default GitHubCard;
