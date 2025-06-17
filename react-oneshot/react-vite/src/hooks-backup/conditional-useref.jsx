import { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-2xl">Count: {count}</h1>
      <h2>Render Count: {renderCount.current}</h2>
      {(count>10)?<h1>Count greater than 10</h1>:""}
      <button
        onClick={() => {
          setCount(count + 1);
          renderCount.current += 1;
        }}
        className="p-2 bg-yellow-400 text-black rounded m-2"
      >
        Increment Count
      </button>
    </div>
  );
}

export default App;
