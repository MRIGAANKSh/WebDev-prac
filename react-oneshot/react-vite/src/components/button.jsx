import { useContext } from "react";
import { Context } from "../context/usercontext";


function Button(){
    const {count,setCount,renderCount}=useContext(Context)

    return (
        <>
        <button
        onClick={() => {
          setCount(count + 1);
          renderCount.current += 1;
        }}
        className="p-2 bg-yellow-400 text-black rounded m-2"
      >
        Increment Count
      </button>
        </>
    )
}

export default Button