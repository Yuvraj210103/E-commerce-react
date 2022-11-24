import React from 'react'
import {useRef} from 'react';
import { useState , useEffect } from 'react';
import collection1 from "./images/men-collection.jpg";
import collection2 from "./images/women-collection.jpg";
import collection3 from "./images/electronics-collection.jpg";
import collection4 from "./images/jewellery-collection.jpg";
import ScrollAnimation from 'react-animate-on-scroll';

function Collection(props) {

 

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
    console.log("clicked");
  };

   const [category, setcategory] = useState("")
 
   const [Items, setItems] = useState([]);
  
   const updateItems = async (d)=>{
    setcategory(d)
    handleClick();
    
    const url = `https://fakestoreapi.com/products/category/${d}`
    
    let data = await fetch(url);
    let parseData = await data.json()
    
    setItems(parseData)
    
   }

   
  

  props.myFun(false);

  return (

    <div className=' my-20'>

<ScrollAnimation animateIn="fadeIn" initiallyVisible={true} >
      <div className='grid grid-cols-1 md:grid-cols-2'>
      
        <div className='mx-4 my-4  cursor-pointer' onClick={()=>updateItems("men's clothing")}  >
          <img src={collection1} alt=""  className='h-40 md:h-52 w-full rounded-xl relative -z-20'  />
          <h1 className='absolute text-black font-semibold bg-gray-50 rounded-md text-2xl -mt-8 -z-10 px-2 md:text-3xl'>MEN'S COLLECTION</h1>
        </div>


        <div className='mx-4 my-4 cursor-pointer 'onClick={()=>updateItems("women's clothing")}>
          <img src={collection2} alt=""  className='h-40 md:h-52 w-full rounded-xl relative -z-20'/>
          <h1 className='absolute hidden text-white text-2xl font-bold bg-orange-500 rounded-md -mt-8 -z-10 px-2 md:text-3xl'>WOMEN'S COLLECTION</h1>
        </div>


        <div className='mx-4 my-4  cursor-pointer'onClick={()=>updateItems("electronics")}>
          <img src={collection3} alt=""  className='h-40 md:h-52 w-full rounded-xl relative -z-20'/>
          <h1 className='absolute text-white text-2xl -mt-8 bg-blue-800 rounded-md -z-10 px-2 md:text-3xl'>ELECTRONICS</h1>
        </div>


        <div className='mx-4 my-4  cursor-pointer'onClick={()=>updateItems("jewelery")}>
          <img src={collection4} alt=""  className='h-40 md:h-52 w-full rounded-xl relative -z-20'/>
          <h1 className='absolute text-white text-2xl -mt-8 bg-orange-900 px-2 rounded-md -z-10 md:text-3xl'>JEWELLERY</h1>
        </div>
        

        </div> 
        </ScrollAnimation>

        <h1  ref={ref} className={`text-center font-semibold text-2xl uppercase my-8 ${props.mode==='dark'?"text-white":"text-black"}`}>{category}</h1>
     <div className="collection my-5 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 " >

      
      {Items.map((element)=>(
        <ScrollAnimation animateIn="fadeIn" initiallyVisible={false} >
         <div className='product bg-white rounded-lg p-4 mx-11 md:mx-0 ' key={element.id}>
         
           <img src={element.image} alt="Loading" className='w-36 h-40 mx-auto' />
          
           <p className="title font-semibold text-lg my-3">{element.title.slice(0,25)}...</p>
           <p className='my-3 h-20 '>{element.description.slice(0,70)}...</p>
           <p className='my-3'>Price - $ <b>{element.price}</b></p>
          
          <button className=' bg-black text-white text-center w-full rounded-xl my-3 p-2 md:hover:scale-95' id='add'  >
           Add to Cart
           </button>
           
         
          
         </div>
         </ScrollAnimation>
      ))}
     </div>

    </div>
  )
}

export default Collection