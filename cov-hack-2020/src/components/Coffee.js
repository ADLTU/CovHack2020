import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Chicken extends Component {
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
        <Cards_Chicken productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Chicken = ({ productType, redirect }) => {

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
                Chicken Menu
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Chicken;