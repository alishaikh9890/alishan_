

import { Route, Routes, useSearchParams } from "react-router"

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Features from './components/Features'
import Contact from './components/Contact'
import Login from './components/Login'
import Product from './components/Product'
import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`)
    const prod = await res.json()
    setData(prod)
  }

  useEffect(()=> {
      fetchData()
  }, [])
console.log(data)

return (
<>


<Navbar/>

<Routes>
  <Route path="/login" element={<Login/>} />
  <Route path="/home" element={<Home data={data}/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/features" element={<Features/>} />
  <Route path="/product/:id" element={<Product  data={data} />} />
  <Route path="/contact" element={<Contact/>} />
</Routes>

    
    </>
)
   
}

export default App
