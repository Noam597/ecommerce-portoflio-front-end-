



export const cartReducer = (state,action)=>{
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, cart:[...state.cart,{...action.payload,qty:1}]}
        case 'REMOVE_FROM_CART':
             return {...state,cart: state.cart.filter((c)=>c.id !== action.payload.id)};
        case 'ADD_QUANTITY':
             return {...state,cart:state.cart.filter(
                    (c)=>c.id === action.payload.id?(c.qty = action.payload.qty +1): c.qty)}
        case 'REMOVE_QUANTITY':
             return {...state,cart:state.cart.filter(
                    (c)=>c.id === action.payload.id?(c.qty = action.payload.qty -1): c.qty)}
        case 'CHANGE_CART_QUANTITY':
                return {...state,cart:state.cart.filter(
                     (c)=>c.id === action.payload.id?(c.qty = action.payload.qty): c.qty)}
        case 'EMPTY_CART':
            return {...state,cart: state.cart.filter((c)=>c.id === action.payload.id)};            
        default:
            return state
    }
}