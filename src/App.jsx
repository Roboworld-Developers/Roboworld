import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App
