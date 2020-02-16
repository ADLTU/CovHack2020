import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_BK extends Component {
  state = {
    productType: [
      { name: 'Dark Chocolate Biscuits', isActive: false },
      { name: 'Milk Chocolate Biscuits', isActive: false },
      { name: 'Sandwich Biscuits', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_BK productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_BK = ({ productType, redirect }) => {

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
                <Button> Go Back       </Button>
            </Link>
                Biscuits Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_BK;