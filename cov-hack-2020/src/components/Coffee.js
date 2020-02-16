import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Coffee extends Component {
  state = {
    productType: [
      { name: 'Nescafe Azera Americano Instant Coffee', isActive: false },
      { name: 'Kenco Smooth Instant Coffee', isActive: false },
      { name: 'Nescafe Gold Blend Instant Coffee', isActive: false },
      { name: 'Lor. Coffee Classique', isActive: false },
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Coffee productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Coffee = ({ productType, redirect }) => {

    const cards = (productType) => {

        return productType.map((product) => {
            return (
                <Col sm="3">
                    <Card body md="auto">
                        <CardTitle> {product.name}</CardTitle>
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
                Coffee Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Coffee;