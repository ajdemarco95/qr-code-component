import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="grid min-w-full h-screen place-items-center bg-blue-100">
          <div className="text-center max-w-[30%] bg-white p-4 rounded-xl font-display">
            <img src="/images/image-qr-code.png" className="rounded-xl " />
            <h1 className="font-medium text-lg mt-3 leading-6">
              Improve your front-end skills by building projects
            </h1>
            <p className="font-light text-xs mt-3 text-gray-400">
              Scan the QR code to visit Frontend Mentor and take your coding
              skills to the next level
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
