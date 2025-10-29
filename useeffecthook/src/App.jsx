import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(function()
  {
    setInterval( setCount(function(count)
    {
      return count+1;
    }) , 10000)
  } , [])
  return <>
    <h1> {count} </h1>
  </>
}

export default App
