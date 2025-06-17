import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []); // Never changes unless dependencies change

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Count: {count}</h1>

      <Button onClick={increment} />

      <button
        onClick={() => setOtherCount((prev) => prev + 1)}
        className="p-2 m-2 bg-yellow-400 text-black rounded"
      >
        Increment Other Count ({otherCount})
      </button>
    </div>
  );
}

function Button({ onClick }) {
  console.log("Button rendered"); // This will only log when `increment` changes

  return (
    <button
      onClick={onClick}
      className="p-2 m-2 bg-yellow-400 text-black rounded"
    >
      Increment Count
    </button>
  );
}

export default App;
