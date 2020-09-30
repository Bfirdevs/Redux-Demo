import React from 'react'
import { buyCake } from '../redux/cake/cakeActions'
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numberOfCakes}</h2>
            <button onClick = {props.buyCake}>Buy Cake</button>
        </div>

    )
}

// this function gets the state as parameter and returns an object
const mapStateToProps = state => {
    return {
        numberOfCakes : state.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)