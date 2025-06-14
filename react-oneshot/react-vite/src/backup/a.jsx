import { useState } from "react"

// function App(){

//   const [user,setUser]=useState("mrigaank")

 
//   const changeuser=()=>{
//     // console.log(user)
//     // user="mrigaank sharma"
//     // console.log(user)

//     setUser("mrigaank sharma")

//   }

  
//   return(
//     <>
//     <div className="w-full min-h-screen bg-zinc-700">
//       <h1 className="text-3xl text-white font-bold">My name is mrigaank sharma </h1>
//       <h2 className="text-5xl text-pink-900 ">hey {user}</h2>
//       <button id="btn" className="bg-amber-300 p-1.5" onClick={changeuser}>Change user</button>
//     </div>
    
//     </>
//   )
// }



// export default App



function A(){

  const onSubmithandler=(e)=>{
    e.preventDefault()
    console.log("form submitted")
    console.log(username)
    setUsername('')
  }

  const [username,setUsername]=useState('')

  return(
    <>
      <div className="w-full min-h-screen bg-gray-900 flex justify-center items-center">
        <div className="bg-gray-800 rounded-lg">
           <h1 className="text-3xl p-2 m-5 text-white ">Form </h1>
        
        <form onSubmit={(e)=>{onSubmithandler(e)}} className="text-white flex gap-3 flex-col p-2 m-5">
          <input value={username} onChange={(e)=>{
            setUsername(e.target.value)
          }} type="text" placeholder="enter your name" className="bg-gray-900 rounded-md p-1.5 m-1 border-b-gray-950" />
          <button className="bg-yellow-600 p-2 m-1 rounded-xl cursor-pointer" >Submit</button>
        </form>
        </div>
       
      </div>
    </>
  )
}

export default A;






//<></> inhe fragemnts khete hai