import React, {Component, useState} from 'react';
import {Toast, ToastBody, ToastHeader} from "reactstrap";

class Cart extends Component {

    state = {
        cart: [],
    };
}
    const add_cart = ({value }) => {
        console.log(this.state.cart)
        this.state.cart.concat(value)
    }

export default Cart;