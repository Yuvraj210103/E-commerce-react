import React from 'react'
import { useState } from 'react'



function Login(props) {

  const [display, setdisplay] = useState("hidden")

  props.myFun(false)  
  props.myFun2(false)

  

  const register =()=>{
    if(display==='hidden'){
   setdisplay("inline-block"); 
    }
    else{
      setdisplay("hidden");
    }
  }

  return (
    <div className="grid">

    <div className={`flex flex-col ${props.mode==='dark'?"bg-gray-500 text-white":"bg-gray-200 text-black"} shadow-xl align-middle my-36 md:w-80 md:mx-auto rounded-xl mx-10`}>
    <h2 className='text-center mt-2'> {display==='hidden'?"Not Registered?":"Already have a account?"}<span className={`${props.mode==='dark'?"text-blue-300":"text-blue-600 cursor-pointer"}`} onClick={register}>Click here </span> </h2>
       <h1 className='text-2xl my-4 text-center font-semibold'>Sign in</h1>
       
       <div className='mx-4'>
        <h3 className='my-2'>Email address </h3>
        <input type="text" placeholder='Enter email' className='my-2  rounded-md w-full p-2 text-black'/>
        <h3 className='my-2'>Password</h3>
        <input type="text" placeholder='Enter password' className='my-2 rounded-md w-full p-2 text-black' />

                     {/* for registering */}

         <div className={`${display} w-full`}>
        <h3 className='my-2 '>Confirm Password</h3>
        <input type="text" placeholder='Confirm password' className='my-2 rounded-md w-full p-2 text-black' />
        <h3 className='my-2 '>Enter Full Name</h3>
        <input type="text" placeholder='Enter Name' className='my-2 rounded-md w-full p-2 text-black' />

        </div>


       <h1 className="flex my-2">
        <input type="checkbox" name="Remember me" id="" placeholder='' />
         <h2 className='mx-3'>Remember me</h2>
        </h1>
        <button className='my-3 text-center bg-blue-600 w-full rounded-lg text-white p-2'>Submit</button>
        <h5 className={`text-right my-2 ${display==='hidden'?'inline-block':'hidden'}`}>Forgot <span className={`${props.mode==='dark'?"text-blue-300":"text-blue-600 cursor-pointer"}`} >password?</span></h5>
        
       </div>
    </div>

    </div>
  )
}

export default Login