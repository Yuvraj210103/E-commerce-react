import React from 'react'
import checkout from './images/Checkout.jpg'



function Checkout(props) {

    props.myFun(false);
    props.myFun2(false);

    
        
    
    

  return (

    <div className='my-40 lg:my-32 mx-7 '>
        <h1 className='hidden lg:inline-block absolute mt-2 font-sans text-2xl mx-4 bg-white z-0 p-2 shadow-lg rounded-md'>Congratulations Your Order will be delivered within 5-6 business days</h1>
      <img src={checkout} alt="" className='lg:hidden w-full rounded-xl'/>
      <img src={checkout} alt="" className='hidden lg:inline-block w-full rounded-xl ' style={{height:470}}/>
      <h1 className={`text-2xl my-4 font-sans font-semibold lg:hidden ${props.mode==='dark'?"text-white":"text-black"}`}>Congratulations Your Order will be delivered within 5-6 business days</h1>
    </div>

  )
}

export default Checkout