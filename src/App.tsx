import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  console.log(useState());

  return (
    <>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-3 md:mt-5">
              Master any skill and monitor in simple easy way
            </h1>
            <p className="md:text-xl text-base text-gray-500 mt-4">
              this is the easies and most compeling way to master any skill
            </p>
          </div>
          <div className="bg-blue-300 h-32 flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
