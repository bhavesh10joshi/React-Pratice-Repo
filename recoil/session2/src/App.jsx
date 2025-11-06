import { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import {NetworkCount,JobsCount,MessagingCount} from "./store/atoms/app"

function App() {
  return<>
  <RecoilRoot><Mainapp/></RecoilRoot>
  </>
}
function Mainapp()
{
  const messagecount = useRecoilValue(MessagingCount);  
  const jobsCount = useRecoilValue(JobsCount); 
  const networkCount = useRecoilValue(NetworkCount);  
 

  return <>
    <button>Home</button>
     <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount >= 100 ? "99+" : jobsCount})</button>
       <button>Messaging ({messagecount >= 100 ? "99+" : messagecount})</button>
        <button>Me</button>
  </>
}
export default App
