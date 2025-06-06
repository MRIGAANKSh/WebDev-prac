import { useState } from "react"
//let Counter=15

function App() {
  const [color,setColor]=useState('olive')

  function changecolor(){
    let random=Math.random(1,10);
    
  }

  return (
    <>
      <div className='w-full min-h-screen ' style={{backgroundColor:color}} id='body'>
        <button onClick={() => {setColor("yellow")}} className="text-white bg-yellow-400 p-2 m-4 rounded">
          Yellow
        </button>
        <button onClick={() => {setColor("blue")}} className="text-white bg-blue-900 p-2 m-4 rounded">
          Blue
        </button>
        <button onClick={() => {setColor("red")}} className="text-white bg-red-600 p-2 m-4 rounded">
          Red
        </button>
      </div>
    </>
  );
}

export default App