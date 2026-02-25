import { useState } from 'react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/NavBar';
import Home from './pages/Home';
import Login from './pages/auth/login';
import SignUp from './pages/auth/SignUp';
import ScrollToHash from './component/Scroll';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScrollToHash />
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
