import { useEffect, useRef, useState } from 'react'

function useDebounce(original)
{
  const val = useRef();

  function fn()
  {
    clearTimeout(val.current);
    val.current = setTimeout(function()
    {
      return original;
    },500);
  }
  
  return fn;
}
function App() {
  const [currtext , Setcurrtext] = useState("");
  const deboncedval = useDebounce(currtext); 
  function changefn(val)
  {
    Setcurrtext(val.target.value);
  }

  useEffect(function()
  {
      fetch("https://amazon.api.search/");
      console.log("fetched it ");
  } , [deboncedval]); 
  return <>
    <input type="text" onChange={changefn} style={{height:"2rem" , width : "9rem"}}/>
  </>
}

export default App
