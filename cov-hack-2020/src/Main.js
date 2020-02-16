import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
import {Link} from 'react-router-dom'

class Main extends Component {
  state = {
    productType: [
      { name: 'Chicken', isActive: false },
      { name: 'Beef', isActive: false },
      { name: 'Lamb', isActive: false },
      { name: 'Cereals', isActive: false },
      { name: 'Rice', isActive: false },
      { name: 'Pasta', isActive: false },
      { name: 'Noodles', isActive: false },
      { name: 'Coffee', isActive: false },
      { name: 'Tea', isActive: false },
      { name: 'Biscuits', isActive: false },
      { name: 'Fruits', isActive: false },
      { name: 'Vegtables', isActive: false },
      { name: 'Bread', isActive: false },
      { name: 'Milk', isActive: false },
      { name: 'Butter', isActive: false },
      { name: 'Cheese', isActive: false },
      { name: 'Condiments', isActive: false },
      { name: 'Spices', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards productType={this.state.productType} />
      </div>
    )
  }
}

const Cards = ({ productType, redirect }) => {

    const cards = (productType) => {

        return productType.map((product) => {
            return (
                <Col sm="3">
                    <Card body md="auto">
                        <CardTitle> {product.name}</CardTitle>
                        <Link to={'/'+product.name}>
                        <Button> View Products </Button>
                        </Link>
                    </Card>
                </Col>
            )
        })
    }
    return (
        <Container>
            <h1> Welcome </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main;