import React, {Component, useState} from 'react';
import { Container, Card, Button, CardTitle, Row, Col, Toast, ToastBody, ToastHeader } from 'reactstrap';
import {Link} from "react-router-dom";
import Toaster from './Cart'

class Main_Chicken extends Component {
  state = {
    productType: [
      { name: 'Roasting Joint', isActive: false },
      { name: 'Diced Beef', isActive: false },
      { name: 'Beef Slices', isActive: false },
      { name: 'Steak', isActive: false },
      { name: 'Beef Mince', isActive: false },
        { name: 'Beef Burger', isActive: false }

    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Chicken productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Chicken = ({ productType, cart }) => {

    const [show, setShow] = useState(false)


    // const toaster = (name) => {
    //     console.log("hello")
    //
    //     return (
    //         <div className="p-4 bg-info my-2 rounded">
    //             toggle
    //                 <Toast isOpen={show}>
    //                     toggle
    //                     <ToastHeader toggle={toggle}>Add To Cart</ToastHeader>
    //                     <ToastBody>{name} added to cart</ToastBody>
    //                 </Toast>
    //         </div>
    //     )
    // }

    const toggle = () => setShow(!show)


    const cards = (productType) => {

        return productType.map((product) => {
            return (
                <Col sm="3">
                    <Card body md="auto">
                        <CardTitle> {product.name}</CardTitle>
                        <Button onClick={ toggle() }> Add To Cart </Button>
                        { show === true ?  <Toaster toggle={toggle} name={product.name} show={show} /> : null}
                    </Card>
                </Col>
            )
        })
    }
    return (
        <Container>
            <h1>

            <Link to={'/'}>
                <Button> Go Back       </Button>
            </Link>
                Beef Options
                <Link to={'/cart'}>
    <Button style={{float: 'right'}} color="primary"> Go To Cart </Button>
</Link>
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Chicken;