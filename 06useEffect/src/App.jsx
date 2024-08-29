import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color , setColor] = useState(0);
  useEffect(()=>{

    alert("count was changed")
    setColor(color+1)   // count will change and it will increase color by 1
  },[count])

  return (
    <>
      <Navbar color={"navy" + "blue" + color} />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
