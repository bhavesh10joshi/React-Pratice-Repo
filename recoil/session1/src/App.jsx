import { useState } from 'react'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil"
import './App.css'
import {counter} from "../store/atoms/counter"
function App() {

  return (
    <>
      <RecoilRoot>
        <Counter/>
      </RecoilRoot>
    </>
  )
}
function  Counter()
{
  return<>
  <Display />
  <Increase />
  <Decrease />
  </>
}
function Display()
{
  const count = useRecoilValue(counter);
  return <>
    {count}
  </>
}
function Increase()
{
  const SetCount = useSetRecoilState(counter);
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
}
function Decrease()
{
  const SetCount = useSetRecoilState(counter);
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
}
export default App
