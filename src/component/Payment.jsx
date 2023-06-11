import {useEffect, useState } from "react"
import useShop from "../ShopContext"

const Payment=()=>{
    const initialPayment={
        evc:false,
       zaad:false,
       sahal:false
}
    const[paymentmethod,setpayment]=useState(initialPayment);
    const[update,setUpdated]=useState(false)
    const[phone,setphone]=useState("");
   const {total} =useShop();
 useEffect=(()=>{},[update]);
   const Hadllesubmit=(event)=>{
    event.preventDefault();
    console.log(phone)
   }
    return (
        <div>
            <h1>Pay width</h1>
            <div className="payment-cards">
            <div className={`payment-card ${paymentmethod.zaad && "salected"}`}
          onClick={()=> setpayment({...initialPayment,zaad:true})}
        >
                <h3>Zaad service</h3>
           
        </div>
        <div className={`payment-card ${paymentmethod.evc && "salected"}`}
         onClick={()=> setpayment({...initialPayment,evc:true})}>
          
                <h3>Evc plus</h3>
       
        </div>
        <div className={`payment-card ${paymentmethod.sahal && "salected"}`}
         onClick={()=> setpayment({...initialPayment,sahal:true})}>

        <h3>Zahal</h3>
           
        </div>
        <form
        onSubmit={Hadllesubmit}
        >
            <input type="text" className="form-control" placeholder="2526..."
            onChange={(e)=> setphone(e.target.value)}
            />
            <button className="btn-proceed">Proceed</button>
        </form>
            </div>
     
        
        </div>
    )
}

export default Payment