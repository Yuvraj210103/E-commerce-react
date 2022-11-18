import React from 'react'
import { useCart } from "react-use-cart";
import {
  Link,
  
} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Msg = () => (
  <div className=' text-center'>
     <h1 className='text-lg font-bold'>Added To Cart</h1>
   <Link to="/cart"><button className='my-2 bg-black text-white p-2 rounded-md '>Go to Cart</button></Link> 
    
  </div>
)

function ProductItems(props) {
  <ToastContainer
position="top-center"
autoClose={500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>


  const { addItem } = useCart();

  const notify = () => {
    //toast("Default Notification !");

    toast(<Msg/>, {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }
  

  return (
    
    
    <div className={`bg-white shadow-lg rounded-2xl p-3 flex flex-col  transition-all `}>
     
        <div className='product'>
        <Link to="/productDetails" state={{from:props.id}}>
          <img src={props.image} alt="Loading" className='w-36 h-40 mx-auto' />
         
          <p className="title font-semibold text-lg my-3">{props.title.slice(0,25)}...</p>
          <p className='my-3 h-20 '>{props.description.slice(0,70)}...</p>
          <p className='my-3'>Price - $ <b>{props.price}</b></p>
        </Link>
         <h1 onClick={notify}><button className=' bg-black text-white text-center w-full rounded-xl my-3 p-2 md:hover:scale-95' id='add' onClick={()=> addItem(props.item)} >
          Add to Cart
          </button></h1>
          <ToastContainer autoClose={1500}/>
        
         
        </div>
        
    </div>

     
  )
}

export default ProductItems