import { useState } from 'react'
// import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-green-400 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">
          Education bridge Website
        </h1>
      </div>
    </>
  )
}

export default App
