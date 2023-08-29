export const getCartTotal =(cart)=> cart?.reduce((amount, item )=>item.price +amount, 0)
export const initiaState = {
    cart:[],
    user:[{name: 'krishna', email: 'dksflk@gmail.com', password: '1234'}],
    login: false,
    mens:null,
    womens:null,
    electronics:null,
    jewelery:null
};

function reducer(state, action){
    // console.log(action.item);
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
        case "User":
            return{
                ...state,
                user:[...state.user, action.item]
            }
        case "Auth":
            return{
                ...state,
                login:!state.login
            }
        case "category":
            return{
                ...state,
                mens:action.item.filter((ele)=>ele.category==="men's clothing"),
                womens:action.item.filter((ele)=>ele.category==="women's clothing"),
                jewelery:action.item.filter((ele)=>ele.category==="jewelery"),
                electronics:action.item.filter((ele)=>ele.category==="electronics")

            }
            
    
        default:
            return state;
           
    }
}
export default reducer;