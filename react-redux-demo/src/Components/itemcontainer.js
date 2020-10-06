import React from 'react'
import  { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux';
function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>  
            <button onClick ={props.buyItem}>Buy Items</button> 
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    // passed in a prop from parent component
    // if cake props passed in then we assign number of cakes
    const itemState = ownProps.cake 
        ? state.cake.numberOfCakes 
        : state.iceCream.numOfIceCream 
    return {
        item: itemState
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return{
        buyItem: dispatchFunction
    }
}

export default connect(null, mapDispatchToProps) (ItemContainer)