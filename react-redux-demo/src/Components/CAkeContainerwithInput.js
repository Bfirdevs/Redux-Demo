import React, { useState } from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import {connect} from 'react-redux'

function CakeContainerWithInput(props) {
    const[number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of cakes - {props.numberOfCakes}</h2>
            <input type='text' value={number} onChange={e=> setNumber(e.target.value)} />
             <button onClick = {() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>

    )
}

// this function gets the state as parameter and returns an object
const mapStateToProps = state => {
    return {
        numberOfCakes : state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake:number => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainerWithInput)