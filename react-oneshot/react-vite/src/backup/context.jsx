// //react router dom 

// import { useContext } from "react";
// import { DataContext } from "./context/usercontext";


// function App(){

//   const data=useContext(DataContext)
//   return (
//     <>
//     <div className="w-full flex justify-center items-center  min-h-screen bg-black text-white">
     
// <h1 className="text-3xl">{data}</h1>
      
//       </div>
//     </>
//   )
// }

// export default App;




import { useContext, useRef, useState } from "react";
import Button from "./button";
import { Context } from "./context/usercontext";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);
  return (
    <Context.Provider value={{count,setCount,renderCount}}>
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl">Count: {count}</h1>
      <h2>Render Count: {renderCount.current}</h2>
      {(count>10)?<h1>Count greater than 10</h1>:""}
      <Button/>
    </div>
     </Context.Provider>
  );
}

export default App;

//use Context a full use ye hai button jsx an app jsx me hai 