import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route , Link , useNavigate, Outlet} from "react-router-dom"

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/Class11th" element={<ClassE/>}/>
          <Route path="/Class12th" element={<Classt/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}
function Layout()
{
  return<>
  <div>
    <Header/>
  </div>
  <Outlet/>
  <div>
    This is the funcing footer !
  </div>
  </>
}
function Error()
{
  return <>
  Some Error Encountered !
  </>
}
function Header()
{
  return <>
    <Link to="/Class11th"> 11th class</Link>
    <Link to="/Class12th"> 12th class</Link>
  </>
}
function ClassE()
{
  return <>
  <div>
    this is the page for class 11th
  </div>
  </>
}
function Classt()
{
  return <>
    <div>
    this is the page for class 12th
  </div>
  </>
}
export default App
