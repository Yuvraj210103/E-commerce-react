import React from 'react'
import loading from './loading.gif'
function Spinner() {
 
    return (
      <div className="grid  justify-center  align-middle my-40">
      
        <img className='' src={loading} alt="Loading" />
      
      </div>
    )
  
}

export default Spinner