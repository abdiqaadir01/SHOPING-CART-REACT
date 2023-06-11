export const initialState={
    products:[],
    total:0,
};

const ShopReducer=(state,action)=>{

    const {type,payload}=action;
    switch (type) {
        case "ADD_TO_CART":
            return{
                ...state,
                products:payload.products
            }
            case "REMOVE_FROM_CART":
                return{
                    ...state,
                    products:payload.products
                };
                case "calaculate_tatal_price":
                    return{
                        ...state,
                        total: payload,
            }
        default:
        throw new Error("unkown reducer")
      
    }
}
export default ShopReducer