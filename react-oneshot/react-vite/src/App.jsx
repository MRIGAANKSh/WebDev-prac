import { useState } from "react"

function App(){

  const [user,setUser]=useState("mrigaank")

 
  const changeuser=()=>{
    // console.log(user)
    // user="mrigaank sharma"
    // console.log(user)

    setUser("mrigaank sharma")

  }

  
  return(
    <>
    <div className="w-full min-h-screen bg-zinc-700">
      <h1 className="text-3xl text-white font-bold">My name is mrigaank sharma </h1>
      <h2 className="text-5xl text-pink-900 ">hey {user}</h2>
      <button id="btn" className="bg-amber-300 p-1.5" onClick={changeuser}>Change user</button>
    </div>
    
    </>
  )
}



export default App
