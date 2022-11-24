import React from 'react'
import { useState , useEffect } from 'react';
import ProductItems from './ProductItems';
import Spinner from './Spinner';

function Products(props) {

  props.myFun(true);
  props.myFun2(true);

 const [Items, setItems] = useState([]);
 const [Loading, setLoading] = useState(false)
  
   const updateItems = async ()=>{
    setLoading(true)
    const url = 'https://fakestoreapi.com/products';
    let data = await fetch(url);
    let parseData = await data.json()
    
    setItems(parseData)
    setLoading(false)
   }

   useEffect(() => {
     
   updateItems();
   
     
   }, [])
   
   

  return (
    
    <div>
      <h1 className={`text-3xl sm:text-5xl sm:text-center border-b-4 border-orange-400 font-bold inline-block mx-4 md:mx-6 mt-20 text-center ${props.mode==='dark'?'text-white':'text-black'} `}>Featured Products</h1>
      
     {Loading?<Spinner/>:
     
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-y-14 gap-x-4 my-14 md:my-20 sm:mx-7 -z-10 mx-4">

      
      
       {Items.map((element)=>{
        return(
          <ProductItems key={element.id} id={element.id} title ={element.title} price={element.price} category={element.category} description={element.description} image={element.image} mode={props.mode} addToCart={props.addToCart} item={element}/>
        )
       })}
    </div>
}
    
    </div> 
  )
}

export default Products