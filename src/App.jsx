import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Shop from './pages/shop.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
