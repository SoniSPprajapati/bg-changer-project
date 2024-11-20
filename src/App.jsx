import { useState } from "react";

function App() {
  let [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full trxt-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full trxt-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full trxt-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full trxt-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full trxt-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>

          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full trxt-white shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
