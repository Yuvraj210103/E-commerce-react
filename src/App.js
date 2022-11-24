import Products from './components/Products';
import Navbar from './components/Navbar';
import { useState } from 'react';
import ProductDetails from './components/ProductDetails';
import {
  BrowserRouter ,
  Routes,
  Route
  
} from "react-router-dom"
import Cart from './components/Cart';
import { CartProvider} from "react-use-cart";
import Footer from './components/Footer';
import SlideShow from './components/Slide';
import Collection from './components/Collection';
import Login from './components/login';
import Checkout from './components/Checkout';


function App() {
  
  const [showSlide, setshowSlide] = useState(false)
  const [showFooter, setshowFooter] = useState(true)
  const [Mode, setMode] = useState("light")
  
  
  const setDarkLight = () =>{
    if(Mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor ="black"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "rgb(203 ,213 ,225) "
    
    }
  }
   
    return (
    <>
    <CartProvider>
      
    
    <BrowserRouter>
      <Navbar toggleMode={setDarkLight} mode={Mode}/>

      {showSlide &&  <SlideShow mode={Mode}/>}
     
     <Routes>
     <Route  path="/productDetails" element={<ProductDetails mode={Mode} myFun={setshowSlide}/>} />
     
     <Route  path="/home" element={<Products mode={Mode} myFun={setshowSlide} myFun2={setshowFooter} />} />
     <Route  path="/cart" element={<Cart mode={Mode} myFun={setshowSlide} myFun2={setshowFooter}/>}/>
     <Route  path="/collection" element={<Collection mode={Mode} myFun={setshowSlide}/>}/>
     <Route  path="/login" element={<Login mode={Mode} myFun={setshowSlide} myFun2={setshowFooter}/>}/>
     <Route  path="/checkout" element={<Checkout mode={Mode} myFun={setshowSlide} myFun2={setshowFooter}/>}/>
     </Routes>
      
     
    </BrowserRouter>  
    
   
    </CartProvider>
    {showFooter &&  <Footer mode={Mode}/>}
    
    </>
  );
}

export default App;
