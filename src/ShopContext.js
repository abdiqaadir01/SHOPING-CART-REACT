import { useContext,useReducer } from "react";
import ShopReducer, { initialState } from "./ShopReducer";
import { createContext } from "react";

const shopContext=createContext(initialState)
export const ShopProvider=({children})=>{

 const [state,dispatch]=   useReducer (ShopReducer, initialState);
 const addToCart=(product)=>{
 const updated=state.products.concat(product);
 calculateTotal(updated);


dispatch({
    type:"ADD_TO_CART",
    payload:{
     products:updated
    }
})

}
const removeFromcart=(product)=>{
const updatedProduct=state.products.filter(p=>p.id !== product.id)
calculateTotal(updatedProduct);
dispatch({
    type:"REMOVE_FROM_CART",
    payload:{
     products:updatedProduct
    }
});
};

const calculateTotal= (products)=>{
let total=0;
products.forEach(pro=>{
    total+=pro.price
})
dispatch({
    type:"calaculate_tatal_price",
    payload:total
})
}

const values={
    products:state.products,
    total:state.total,
    addToCart,
    removeFromcart
}
return <shopContext.Provider value={values}>
    {children}
</shopContext.Provider>
 
};

const useShop=()=>{
    const  context = useContext(shopContext);
    if (context=== undefined) {
        throw new Error("this no work")
    }
    return context;
}
export default useShop