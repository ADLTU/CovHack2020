import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Condiment extends Component {
  state = {
    productType: [
      { name: 'Heinz Top Down Squeezy Tomato Ketchup Sauce', isActive: false },
      { name: 'Hp Top Down Brown Sauce', isActive: false },
      { name: 'Tesco Sweet Chilli Dipping Sauce', isActive: false },
      { name: 'Nutella Hazelnut Chocolate Spread', isActive: false },
      { name: 'Hartleys Best Strawberry Seedless Jam', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Condiment productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Condiment = ({ productType, redirect }) => {

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
                Condiment Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Condiment;