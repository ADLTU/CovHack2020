import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Spices extends Component {
  state = {
    productType: [
      { name: 'Schwartz Paprika', isActive: false },
      { name: 'Schwartz Garlic Granules', isActive: false },
      { name: 'Tesco Garam Masala Spice Blend', isActive: false },
      { name: 'Schwartz Perfect Shake Moroccan Seasoning', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Spices productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Spices = ({ productType, redirect }) => {

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
                Spices Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Spices;