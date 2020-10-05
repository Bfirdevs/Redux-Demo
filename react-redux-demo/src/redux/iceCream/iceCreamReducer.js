import  { BUY_ICECREAM } from "./iceCreamTypes"

const initialState = {
    numOfIceCream: 25 
}

const iceCreamReducer = (state= initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM : 
            return {
                ...state,
                numOfIceCream: state.numOfIceCream - action.payload
            }
        default: return state
    }
}

export default iceCreamReducer