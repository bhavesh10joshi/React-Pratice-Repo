import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <>
    <Card>
      <h1>Name is : </h1>
      <h2>Bhavesh</h2>
    </Card>
  </> 
}
function Card({children})
{
  return<>
    {children}
  </>
}
export default App
