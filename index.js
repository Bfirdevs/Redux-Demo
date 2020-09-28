const redux = require('redux')
const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
    }
}

// (previousState, action) ==> newState
// aplication state should be stored as an object
const initialState = {
    numOfCakes: 10,
    numOfIceCream: 20
}
 const reducer = (state = initialState, action)=>{
     switch(action.type) {
        case BUY_CAKE:
             return {
                 ...state, // make a copy of state object and the update the value on the next line
                 numOfCakes: state.numOfCakes - 1 
            }
        case BUY_ICECREAM:
            return {
                ...state, // make a copy of state object and the update the value on the next line
                numOfIceCream: state.numOfIceCream - 1 
            }

    default : return state
     }
 }

 const store = createStore(reducer)
 console.log('initialState', store.getState())
 const unsubscribe = store.subscribe(()=> console.log('Updated State', store.getState()))
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIceCream())
 store.dispatch(buyIceCream())
 unsubscribe()