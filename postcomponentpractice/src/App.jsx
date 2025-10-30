import { useState } from 'react'
import './App.css'

function App() {

  return <>
      <div>
        <div style={{display : "flex" , justifyContent : "center", marginTop:"1rem"}}>
            <Postcomponent name = "bhavesh joshi" Followers="123 Followers"  Time = "3m Ago"></Postcomponent>
        </div>
        <div style={{display : "flex" , justifyContent : "center", marginTop:"1rem"}}>
            <Postcomponent name = "Guarav Sati" Followers="321 Followers"  Time = "56m Ago"></Postcomponent>
        </div>
        <div style={{display : "flex" , justifyContent : "center", marginTop:"1rem"}}>
            <Postcomponent name = "bhashkar fhulara" Followers="3456 Followers"  Time = "1m Ago"></Postcomponent>
        </div>
      </div>
  </>
    
}
function Postcomponent({ name , Followers , Time})
{
  const [Visible , SetVisible] = useState(true);
  
  function changevisibility()
  {
    SetVisible(!Visible);
  }
  return <>
    <button onClick={changevisibility} style={{border:"none" , marginRight : "2rem" , borderRadius : "1rem" , cursor:"pointer"}}>Doit</button>
    <div style={{padding: "1rem" , borderRadius:"2rem" , backgroundColor:"#bdc3c7" , width:"20rem"}}>
        <div style={{display:"flex"}}>
          <div><img src={"../randompic.jpg"} alt="" style={{width:"4rem" , borderRadius:"2rem" , marginRight:"2rem"}} /></div>
          <div>
            <div style={{fontSize:"1.2rem" , fontWeight:"900"}}>{name}</div>
            <div style={{fontWeight:"700"}}>{Followers}</div>
            {Visible && <div>{Time}</div>}
          </div>
        </div>
        <div style={{fontSize:"1.2rem" , fontWeight:"900" , marginTop:"1rem" , marginBottom:"1rem" , marginLeft:"2rem"}}>Want to Know how to win big? Check out how these these folks got a $6000 bounties ! </div>
    </div>
  </>
}

export default App
