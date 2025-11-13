import { useState } from 'react'

function App() {
  

  /*return <>
  <div className='flex h-screen'>
      <div className='transition-all duration-1000 bg-red-700 -translate-x-96 w-0 md:translate-x-0 md:w-89' >
      </div>
      <div className='bg-green-500 w-screen'>Content</div>
  </div>
  </>*/
  /*
  const [darkmode , SetDarkMode] = useState(false);
  function changeit()
  {
    SetDarkMode(!darkmode);
  }
  return <>
  <div className={`h-screen ${darkmode ? "bg-black" : "bg-white"}`}>
    <button onClick={changeit}>Dark mode</button>
  </div>
  </>*/
  /*
  Initializes based on system configuration of themes 
  return <>
  <div className='h-screen bg-white dark:bg-black'>
    
  </div>
  </>
  */
 //full control on dark mode and light mode of the application
  function changeit()
  {  
    console.log(document.querySelector("html"));
  }
  return <>
  <div className='h-screen bg-white dark:bg-black'>
    <button onClick={changeit}>Dark mode</button>
  </div>
  </>
 
}

export default App
