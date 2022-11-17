import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage/HomePage'
import Nav from './components/Nav/Nav'
import Statistics from './views/Statistics/Statistics'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Statistics" element={<Statistics />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
