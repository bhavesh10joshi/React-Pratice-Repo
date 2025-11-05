import { useState , useRef } from 'react'

function useDebounce(orignal)
{
  const originaltimeout = useRef();
  function fn()
  {
    clearTimeout(originaltimeout.current);
    originaltimeout.current = setTimeout(orignal , 200);
  }
  return fn;
}
function App() {
  function backendrequest()
  {
    fetch("https://amazon/api/search");
    console.log("backend request sent !");
  }
  const changes = useDebounce(backendrequest);
  
  return<>
    <input type="text" style={{width:"9rem" , height : "2rem"}} onChange={changes} />
  </>
}

export default App
