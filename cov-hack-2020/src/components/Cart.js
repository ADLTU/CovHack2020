import React, {Component, useState} from 'react';
import {Toast, ToastBody, ToastHeader} from "reactstrap";

const Toaster = ({ show, toggle , name }) => {

        return (
            <div className="p-4 bg-info my-2 rounded">
                <Toast isOpen={show}>
                    <ToastHeader toggle={toggle}>Add To Cart</ToastHeader>
                    <ToastBody>{name} added to cart</ToastBody>
                </Toast>
            </div>
        )
}

export default Toaster;