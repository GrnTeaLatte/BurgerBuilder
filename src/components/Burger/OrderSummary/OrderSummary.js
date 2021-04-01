import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[Order Summary] WillUpdate');
    }
    render() {
        const ingredientSummary = Object.keys( this.props.ingredients )
        .map(igKey => {
             return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{this.props.ingredients[igKey]}
                </li>);
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <h4>A delicious sandwich with the following ingredients:</h4>
                <ul>
                    {ingredientSummary}
                </ul>
                <h4><strong>Total Price: {this.props.price.toFixed(2)}</strong></h4>
                <h4>Continue to Checkout?</h4>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    }
}

export default OrderSummary;