import { useEffect, useRef, useState } from 'react'
import {UseFetch} from "./customhooks/App"
function App() {
  const[currpost , SetcurrPost] = useState(1);
  const {post , loading} = UseFetch("https://jsonplaceholder.typicode.com/todos/" + currpost);
  if(loading)
  {
    return <>
      <h1>Loading ....</h1>
    </>    
  }
  else
  {
    return<>
    <button onClick={function(){SetcurrPost(1)}}>1</button> 
    <button onClick={function(){SetcurrPost(2)}}>2</button> 
    <button onClick={function(){SetcurrPost(3)}}>3</button>  
    <h1>{JSON.stringify(post)}</h1>  
  </>
  }
}

export default App
