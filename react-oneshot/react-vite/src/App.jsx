//react router dom 

import { useContext } from "react";
import { DataContext } from "./context/usercontext";


function App(){

  const data=useContext(DataContext)
  return (
    <>
    <div className="w-full flex justify-center items-center  min-h-screen bg-black text-white">
     
<h1 className="text-3xl">{data}</h1>
      
      </div>
    </>
  )
}

export default App;