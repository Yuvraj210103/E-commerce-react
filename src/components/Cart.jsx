import React from "react";
import { useCart } from "react-use-cart";
import { AiOutlinePlus, AiOutlineMinus,AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import cart from "./images/cart.png";
import happyShopping from "./images/happyShopping.webp";

function Cart(props) {

  
 
  props.myFun(false);
  props.myFun2(false);

  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem ,emptyCart ,clearCartMetadata } =
    useCart();

    const clearCart=()=>{
      
      emptyCart();
      clearCartMetadata();
      
    }


  if (isEmpty)
    return (
      <div className="grid my-36 md:my-8 align-middle justify-center ">
        <img
          src={cart}
          alt="Loading"
          srcset=""
          className={`${props.mode==='dark'?"invert":""}`}
        />
        <h1
          className={`mx-auto mt-5 md:mt-0 text-lg ${
            props.mode === "dark" ? "text-white" : "text-black"
          }`}
        >
          Your cart is empty
          <Link to="/">
            
            <button className={`${props.mode === "dark"?"bg-white text-black":"bg-black text-white"} p-2 rounded-sm mx-2`}>
              Home
            </button>
          </Link>
        </h1>
        
      </div>
    );
  let Total = 0;

  return (



    <div className="my-32 mb-60">


    <div className="img mx-5 md:mx-8 relative -z-10 mb-10 flex">
      <img src={happyShopping} alt="Happy shopping" className="w-full lg:hidden rounded-2xl mx-auto" />
      <img src={happyShopping} alt="Happy shopping" className="w-full lg:inline-block hidden rounded-2xl mx-auto" style={{height:470}}/>
      
    </div>

      {items.map((item) => (
        <div
          key={item.id}
          className="my-4 mx-4 bg-gray-100 p-5 flex rounded-xl"
        >
          <img src={item.image} alt="" className="w-24 h-24 rounded-md " />

          <div className="flex flex-col">
            <h1 className="mobile mx-3 font-bold text-lg md:hidden">
              {item.title.slice(0, 10)}...
            </h1>
            <h1 className="Desktop mx-3 font-bold text-lg hidden md:block">
              {item.title}
            </h1>

            <p className="mobile ml-3 md:hidden">
              {item.description.slice(0, 30)}...
            </p>
            <p className="desktop ml-3 hidden md:block w-96">
              {item.description.slice(0, 100)}...
            </p>

            <h1 className="mx-3 my-2 font-semibold text-sm">Qty-{item.quantity}</h1>

            <h1 className="hidden">
              {(Total = Total + item.price * item.quantity)}
            </h1>
          </div>

          <div className="flex flex-col ml-auto">
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              className="my-2 mx-2 bg-white p-1 rounded-md"
            >
              <AiOutlinePlus />
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              className="my-2 mx-2 bg-white p-1 rounded-md"
            >
              <AiOutlineMinus />
            </button>
            <button className="my-2 mx-2" onClick={()=> removeItem(item.id)}><AiOutlineDelete size={25}/></button>
          </div>
        </div>
      ))}




      {/*                   Cart Nav                        */}





      <div className={`cartNav fixed bottom-0 ${
            props.mode === "dark" ? "text-white bg-gray-500" : "bg-gray-200"
          } w-full px-6 py-2 font-semibold`}>
        <div className="flex ">
          <div className="flex flex-col">
            <h3 className="my-2 text-sm">Order summary</h3>
            <h1 className="my-2 text-xl  font-semibold">Total</h1>
          </div>

          <div className="flex flex-col ml-auto">
            <h3 className="my-2">({totalUniqueItems} Item)</h3>
            <h1 className="my-2">${Math.ceil(Total)}.00</h1>
          </div>
        </div>
        <div className="flex mx-5 my-5">
          <Link to="/checkout" className="w-full">
          <button className="bg-black p-2 w-full rounded-2xl text-white mx-auto hover:scale-95" onClick={clearCart}>
            Checkout
          </button>
          </Link>
        </div>
      </div>



      
    </div>
  );
}

export default Cart;
