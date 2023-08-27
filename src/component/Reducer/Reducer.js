export const initiaState = {
    cart:[],
    user:""
};

function reducer(state, action){
    console.log(action.item);
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
            
            
        case "Remove":
            return {
                ...state,
                cart:[...state.cart.filter((ele)=>ele.id!==action.item)]
            }
            
    
        default:
            return state;
           
    }
}
export default reducer;