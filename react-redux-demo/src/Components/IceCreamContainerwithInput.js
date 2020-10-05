import React, { useState } from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from '../redux';

function IceCreamContainerWithInput(props) {
    const[number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of ice cream - {props.numOfIceCream }</h2>
            <input type='text' value={number} onChange={e=> setNumber(e.target.value)} />
            <button onClick = {() => props.buyIceCream(number)}>Buy {number} Ice Cream</button>
        </div>

    )
}

// this function gets the state as parameter and returns an object
const mapStateToProps = state => {
    return {
        numOfIceCream : state.iceCream.numOfIceCream
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: number => dispatch(buyIceCream(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (IceCreamContainerWithInput)