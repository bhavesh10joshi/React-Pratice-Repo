import { useRef, useState } from "react";
import "./App.css";

function useCounter()
{
  const [count , setCount] = useState(0);
  function increasecount()
  {
    setCount(function(count)
    {
      return count+1;
    });
  }
  return{
    increasecount : increasecount , 
    count : count 
  }
}
function App()
{
  return <>
    <Counter/>
    <Counter/>
  </>
}
function Counter() {
  const{increasecount , count} = useCounter();

  return <>
    <button onClick={increasecount}>Increase</button>
    <h1>{count}</h1>
  </>
}

export default App;
