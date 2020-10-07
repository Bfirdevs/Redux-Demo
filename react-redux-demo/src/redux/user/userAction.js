import axios from 'axios'
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
}  from './userTypes'



const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//fetch user function(with thunk) will return another function
//instead of returning an action we will return a function
// this does not have to be pure function
// this can have sideeffects like API calls
export const fetchUsers= () => {
    return(dispatch) => {
        dispatch(fetchUsersRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUsersSuccess(users))
        })
        .catch( error => {
            const errorMsg = error.message 
            dispatch(fetchUsersFailure(errorMsg))
        })
    }
}