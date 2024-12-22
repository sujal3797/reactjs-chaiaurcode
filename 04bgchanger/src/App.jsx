import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={() => setColor("red")} className="outline-none px-4 rounded-full" style={{backgroundColor: "red"}}>Red</button>
        <button onClick={() => setColor("green")} className="outline-none px-4 rounded-full" style={{backgroundColor: "green"}}>Green</button>
        <button onClick={() => setColor("blue")} className="outline-none px-4 rounded-full" style={{backgroundColor: "blue"}}>Blue</button>
        <button onClick={() => setColor("purple")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "purple" }}>Purple</button>
        <button onClick={() => setColor("orange")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "orange" }}>Orange</button>
        <button onClick={() => setColor("yellow")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "yellow" }}>Yellow</button>
        <button onClick={() => setColor("pink")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "pink" }}>Pink</button>
        <button onClick={() => setColor("teal")} className="outline-none px-4 rounded-full" style={{ backgroundColor: "teal" }}>Teal</button>
      </div>
      </div>

    </div>

  )
}

export default App
