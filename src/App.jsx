import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}

export default App
