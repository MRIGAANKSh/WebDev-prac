import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [otherCount, setOtherCount] = useState(0);

  // Expensive calculation simulated with a loop
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + count;
  }, [count]); // only recalculates when 'count' changes

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Expensive Calculation: {expensiveCalculation}</h1>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="p-2 m-2 bg-yellow-400 text-black rounded"
      >
        Increment Count ({count})
      </button>

      <button
        onClick={() => setOtherCount((prev) => prev + 1)}
        className="p-2 m-2 bg-yellow-400 text-black rounded"
      >
        Increment Other Count ({otherCount})
      </button>
    </div>
  );
}

export default App;
