import { useRef, useState } from 'react'


function App() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  return (
    <>
      <div className='bg-sky-950 h-185.5 flex justify-center'>
        <Otp reference={ref1} onDone={function()
          {
            ref2.current.focus();
          }
        }NotDone={function()
            {
              ref1.current.focus();
            }
          }></Otp>
        <Otp reference={ref2} onDone={function()
          {
            ref3.current.focus();
          }
        }NotDone={function()
            {
              ref1.current.focus();
            }
          }/>
        <Otp reference={ref3} onDone={function()
          {
            ref4.current.focus();
          }
        }NotDone={function()
            {
              ref2.current.focus();
            }
          }/>
        <Otp reference={ref4} onDone={function()
          {
            ref5.current.focus();
          }
        }
        NotDone={function()
            {
              ref3.current.focus();
            }
          }/>
        <Otp reference={ref5} onDone={function()
          {
            ref5.current.focus();
          }
        }NotDone={function()
            {
              ref4.current.focus();
            }
          }/>

      </div>
    </>
  )
}

function Otp({reference , onDone , NotDone})
{
  const[curr , setcurrvalue] = useState("");
  
  return<>
    <input type="text" value={curr} ref={reference} className='bg-[#74d4ff] h-14 w-12 rounded-lg ml-2 mt-10 text-black-500 p-5'onChange={function(e)
      {
        const val = e.target.value;
        const valnum = Number(val);
        if(!isNaN(valnum) && val!="") 
        {   
          console.log(e.key);
          setcurrvalue(val);
          e.target.value = curr; 
          onDone();
        }
      }
      }
      onKeyDown={function(e)
      {
        console.log("hi");
        if(e.key == " Backspace")
        {
          setcurrvalue("");
          e.target.value = curr; 
          NotDone();
          console.log(e.key);
        }
      }
    }/>
  </>
}
export default App
