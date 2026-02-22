import { useState } from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import Home from './pages/Home'
import Login from './pages/auth/login'
import SignUp from './pages/auth/SignUp'
import Header from './component/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
