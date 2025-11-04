import { useState } from 'react'
import {UsePrev} from "./hooks/app"

function App() {
  const [currvalue , SetCurrValue] = useState(0);
  //use of useprev
  function add()
  {
    SetCurrValue(currvalue+1);
  } 
  const prevalue = UsePrev(currvalue);
  return <>
    <div>The current value is </div>
    <h1>{currvalue}</h1>
    <button onClick={add}>Increase</button>
    <div>The previous value is </div>
    <h1>{prevalue}</h1>
  </>
}

export default App
