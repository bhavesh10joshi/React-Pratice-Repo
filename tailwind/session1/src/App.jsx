import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-sky-950 h-185.5'>
        <div className='flex justify-center h-30 pt-10'>
          <div className='pt-2'> <svg width="30px" height="30px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="white"><path d="M7 21L17 21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.5 7L13.5 11M13.5 13L13.5 11M13.5 11L14.8706 9.43363M17 7L14.8706 9.43363M14.8706 9.43363L17 13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.5 7L6.5 11.5L10 11.5L10 13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 16.4V3.6C2 3.26863 2.26863 3 2.6 3H21.4C21.7314 3 22 3.26863 22 3.6V16.4C22 16.7314 21.7314 17 21.4 17H2.6C2.26863 17 2 16.7314 2 16.4Z" stroke="#ffffff" stroke-width="1.5"></path></svg> </div>
          <div class='text-[#00b8db] ml-2 text-[30px]'>Webinar</div>
          <div class='text-white text-[30px]'>.gg</div>
        </div>
        <div className='text-white text-[30px] flex justify-center h-30 pt-10 font-bold pb-2'> Verify Your Age</div>
        <div className='text-[#74d4ff] flex justify-center pb-10'> Please confirm your birth year . This data will not be stored . </div>
        <div className='flex justify-center pb-10'><input type="text" placeholder='Your Birth Year' className='bg-[#00598a] h-12 w-70 flex justify-center rounded-lg pl-2'/></div>
        <div className='flex justify-center'> <button className='bg-[#00a6f4] h-10 w-70 flex justify-center items-center rounded-lg '>Continue</button ></div>
      </div>
    </>
  )
}

export default App
