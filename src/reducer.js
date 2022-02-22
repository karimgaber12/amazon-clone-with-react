export const initialState = {
    basket: [],
    user:null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((previousAmount,CurrentItem) => CurrentItem.price + previousAmount,0) // use 0 if we do not have amount

const reducer = (state,action)=>{
    switch(action.type){
        // ========================= add to basket=======================
        case "ADD_TO_BASKET": // case to link between reducer and dispatch
            return{
                ...state,
                basket: [...state.basket, action.item]  // changing in data or editing or adding
            };


            case 'EMPTY_BASKET':
                return {
                  ...state,
                  basket: []
                }
        // ========================= remove from basket=======================
        case 'REMOVER_FROM_BASKET':
            // first get the current index of the item
            const index = state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id);
            // second get new basket with current state
            let newBasket = [...state.basket]
            // third if find items in sopping cart cut it
            if (index >= 0){
                newBasket.splice(index,1)
            }else{
                console.log('can not remove the item')
            }
            return{
                ...state,
                basket:newBasket
            }
            //======================= create user set=======================
            case 'SET_USER':
                return{
                    ...state,
                    user:action.user
                }
            default:
                return state;
     }
}

export default reducer