import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componet/Header/Header'
import AllSection from './Componet/Main/AllSection'
import Footer from './Componet/Footer/Footer'
// import '../src/assets/js/custom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <AllSection/>
     <Footer/>
    </>
  )
}

export default App
