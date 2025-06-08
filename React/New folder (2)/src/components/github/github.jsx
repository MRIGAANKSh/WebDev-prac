import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://api.github.com/users/MRIGAANKSh")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

const data=useLoaderData()

  if (!data) {
    return (
      <div className="text-center text-xl p-10 text-gray-500">Loading...</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <img
          src={data.avatar_url}
          alt="Avatar"
          className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 mb-4"
        />
        <h1 className="text-3xl font-bold text-blue-600">{data.name}</h1>
        <p className="text-gray-600 italic mb-4">@{data.login}</p>
        <p className="text-gray-700 mb-6">{data.bio || "No bio available."}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="bg-gray-100 p-3 rounded-lg shadow">
            <span className="font-semibold block text-lg">{data.followers}</span>
            Followers
          </div>
          <div className="bg-gray-100 p-3 rounded-lg shadow">
            <span className="font-semibold block text-lg">{data.following}</span>
            Following
          </div>
          <div className="bg-gray-100 p-3 rounded-lg shadow col-span-2">
            <span className="font-semibold block text-lg">{data.public_repos}</span>
            Public Repositories
          </div>
        </div>

        <a
          href={data.html_url}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
}

export default Github;


export const githubinfo=async ()=>{
const res=await fetch('https://api.github.com/users/MRIGAANKSh')
return res.json()
}