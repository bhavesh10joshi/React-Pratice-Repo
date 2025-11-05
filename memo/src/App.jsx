import { useState , memo} from 'react'

function App() {
  return (
    <>
        <Counter/>
    </>
  )
}
function  Counter()
{
  const[count , SetCount] =useState(0); 
  return<>
  <Display count={count}/>
  <br />
   <br />
  <Increase SetCount={SetCount}/>
   <br />
   <br />
  <Decrease SetCount={SetCount}/>
  </>
}
function Display({count})
{
  return <>
    {count}
  </>
}
const Increase = memo(function ({SetCount})
{
  function addit()
  {
    SetCount(function(c)
    {
      return c+1;
    });
  }
  return <>
    <button onClick={addit}>Increase</button>
  </>
});
const Decrease = memo (function ({SetCount})
{
  function minusit()
  {
      SetCount(function(c)
      {
        return c-1;
      })
  }
  return <>
    <button onClick={minusit}>Decrease</button>
  </>
});
export default App
