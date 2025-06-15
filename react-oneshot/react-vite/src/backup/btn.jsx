function App() {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center">
      <button
        onClick={() => {
          console.log("Hi, my name is Mrigaank Sharma");
        }}
        className="p-5 m-5 bg-yellow-400 border-amber-200 text-black rounded-xl 
                   transform scale-100 hover:scale-110 active:scale-95 
                   transition duration-300 ease-in-out"
      >
        Notify
      </button>
    </div>
  );
}

export default App;
