import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount((count) => count + 1);
  };
  const removeValue = () => {
    setCount((count) => count - 1);
  };
  const resetValue = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-xl bg-slate-400 w-60 p-5 shadow-xl text-center">
        <div className="flex-wrap">
          <h1 className="border bg-slate-200 rounded-lg px-2 mx-5 justify-center">Counter App</h1>
          <h2 className="border p-2 m-2 bg-white rounded-xl px-2 mx-5">
            Counter Value:{count}
          </h2>
        </div>
        <div className="flex-wrap space-x-2">
          <button
            className="m-2 p-2 rounded-xl bg-sky-300 hover:text-white"
            onClick={addValue}
          >
            Increase
          </button>
          <button
            className="m-2 p-2 rounded-xl bg-sky-300 hover:text-white"
            onClick={removeValue}
          >
            Decrease
          </button>
          <button
            className="m-2 p-2 rounded-xl bg-sky-300 hover:text-white"
            onClick={resetValue}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
