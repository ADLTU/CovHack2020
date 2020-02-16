import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Noodles extends Component {
  state = {
    productType: [
      { name: 'Sharwoods Medium Egg Noodles', isActive: false },
      { name: 'Tesco Medium Egg Noodles', isActive: false },
      { name: 'Amoy Medium Noodles', isActive: false },
      { name: 'Batchelors Super Noodles Chicken', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Noodles productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Noodles = ({ productType, redirect }) => {

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

export default Main_Noodles;