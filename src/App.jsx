import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Description from './components/Description'
import BreakFast from './components/BreakFast'
import Meals from './components/Meals'
import Menu from './components/Menu'
import Add from './components/Add'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Description/>
      <BreakFast />
      <Meals />
      <Menu />
      <Add />
      <Footer />
    </>
  )
}

export default App
