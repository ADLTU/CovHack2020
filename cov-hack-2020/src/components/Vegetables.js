import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Vegtables extends Component {
  state = {
    productType: [
      { name: 'Tesco Mixed Vegetables', isActive: false },
      { name: 'Tesco Peas Broccoli & Green Beans', isActive: false },
      { name: 'Tesco Carrot Cauliflower & Broccoli', isActive: false },
      { name: 'Tesco Tender Vegetable Medley', isActive: false },
      { name: 'Tesco Traditional Sliced Runner Beans', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Vegtables productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Vegtables = ({ productType, redirect }) => {

    const cards = (productType) => {

        return productType.map((product) => {
            return (
                <Col sm="3">
                    <Card body md="auto">
                        <CardTitle> {product.name}</CardTitle>
                        <Button>Buy</Button>
                    </Card>
                </Col>
            )
        })
    }
    return (
        <Container>
            <h1>

            <Link to={'/'}>
                <Button> Go Back </Button>
            </Link>
                Vegetable Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Vegtables;