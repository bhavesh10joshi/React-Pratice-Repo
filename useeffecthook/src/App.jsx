import { useState , useEffect } from 'react'
import './App.css'

function App() {
  const [count , Setcount] = useState(0);

  function increasecount()
  {
    Setcount(c => c+1);
  }
  return<>
    <Counter count={count}></Counter>
    <button onClick={increasecount}>Increament</button>
  </> 
}
function Counter(props)
{
  
  useEffect(function()
  {
    console.log("count was changed ! ");
  } , [props.count]);

  return <>
    <div>{props.count}</div>
  </>
}
export default App
