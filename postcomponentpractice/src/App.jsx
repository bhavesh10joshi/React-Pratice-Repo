import { useState } from 'react'
import './App.css'

function App() {
  return<>
    {[  <Card name={"Guarav"} time={"0:56am"} ></Card> 
      , <Card name={"bhavesh"} time={"8:56am"} ></Card> 
    ]}
  </>
}
function Card(props)
{
  return<>
    <h1>Name is {props.name}</h1>
    <h1>Time is {props.time}</h1>
  </>
}

export default App
