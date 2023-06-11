import { useState } from "react";
import useShop from "../ShopContext"
import { useEffect } from "react";

const Product=({product})=>{
  const {addToCart,removeFromcart,products}=useShop();
const [isinCart,setisinCart]=  useState(false);
useEffect(()=>{

const iscart=products.filter(pro=>pro.id==product.id);
if (iscart.length>0){
  setisinCart(true)
}else{
  setisinCart(false)
}
},[products])



  
  const haddleAddtocart=()=>{
    if (isinCart){
      removeFromcart(product);
    }else{
      addToCart(product);
    }


  }
    return (
  <div className="card"
   style={{minHeight:"100%",background:`
   linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),
  
    url(${product.urlImage})`,
    backgroundSize:"cover",
    backgroundRepeat:"no-repeat"
   }}>
  
    <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
    </div>
  <button className={`btn ${isinCart ?  "btn-secondary":"btn-primary"}`}
  
   onClick={haddleAddtocart}>

    {isinCart?"-":"+"}
   </button>
  </div>
    )
    
    
}

export default Product