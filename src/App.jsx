import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-primary-400 flex items-center justify-center">
        <h1 className="text-primary-2000 text-3xl font-bold">
          Education bridge Website
        </h1>
      </div>
    </>
  )
}

export default App
