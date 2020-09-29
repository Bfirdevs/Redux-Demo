const redux = require('redux')
const createStore = redux.createStore
const combineReducers =  redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()
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
/*
const initialState = {
    numOfCakes: 10,
    numOfIceCream: 20
}
*/

const initialIceCreamState = {
    numOfIceCream: 20
}

const initialCakeState = {
    numOfCakes: 10
}
/*
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
 */
 const cakeReducer = (state = initialCakeState, action)=>{
    switch(action.type) {
       case BUY_CAKE:
            return {
                ...state, // make a copy of state object and the update the value on the next line
                numOfCakes: state.numOfCakes - 1 
           }
   default : return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action)=>{
    switch(action.type) {
       case BUY_ICECREAM:
           return {
               ...state, // make a copy of state object and the update the value on the next line
               numOfIceCream: state.numOfIceCream - 1 
           }
   default : return state
    }
}

const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

 const store = createStore(rootReducers, applyMiddleware(logger))
 console.log('initialState', store.getState())
 const unsubscribe = store.subscribe(()=> {})
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyCake())
 store.dispatch(buyIceCream())
 store.dispatch(buyIceCream())
 unsubscribe()