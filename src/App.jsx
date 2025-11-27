import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './component/Home'
import ClotheDetails from './component/pages,/clotheDetails'
import NavBar from './component/Navbar'
import Shop from './component/Shop'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/shop" element={<Shop />} />;
          <Route path='/:id' element={ <ClotheDetails/>} />
        </Routes>
      </Router>

    </>
  )
}

export default App
