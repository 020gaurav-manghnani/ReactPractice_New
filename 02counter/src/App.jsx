import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function Add(){
    if(count<20)
    setCount(count=count+1)
  }
  function Delete(){
    if(count>0)
    setCount(count=count-1)
  }
  return (
    <>
      <h1>02-Counter</h1>
      <h3>Counter value {count}</h3>
      <button onClick={Add}>Increase</button>
      <button onClick={Delete}>Decrease</button>
    </>
  )
}

export default App
