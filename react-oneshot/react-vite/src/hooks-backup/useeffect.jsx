import { useEffect, useState } from "react";

//counter-- projetc by mine ohk

function App(){
  const [count,setCounter]=useState(0);

  const counter=()=>{
    setCounter(count+1)
  }

  const Decrement=()=>{
    if(count<=0){
      setCounter(0)
    }
    else{
       setCounter(count-1);
    }
   
  }

  useEffect(()=>{
    alert("counter changed value ")
  },[count])

  return (
     <div className="w-full min-h-screen bg-black flex items-center justify-center">
      <div>
        
        <button
        onClick={() => {
         counter()
        }}
        className="p-5 m-5 bg-yellow-400 border-amber-200 text-black rounded-xl 
                   transform scale-100 hover:scale-110 active:scale-95 
                   transition duration-300 ease-in-out"
      >
        {count}
        
      </button>
      <button
        onClick={() => {
          Decrement()
        }}
        className="p-5 m-5 bg-yellow-400 border-amber-200 text-black rounded-xl 
                   transform scale-100 hover:scale-110 active:scale-95 
                   transition duration-300 ease-in-out"
      >
       {count}
      </button>
      </div>
      
    </div>
  )
}

export default App;

