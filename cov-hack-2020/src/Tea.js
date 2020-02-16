import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Tea extends Component {
  state = {
    productType: [
      { name: 'Breast', isActive: false },
      { name: 'Thighs', isActive: false },
      { name: 'Wings', isActive: false },
      { name: 'Drumsticks', isActive: false },
      { name: 'Full Chicken', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Tea productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Tea = ({ productType, redirect }) => {

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

export default Main_Tea;