import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Pasta extends Component {
  state = {
    productType: [
      { name: 'Tesco Fusilli Pasta Twists', isActive: false },
      { name: 'Hearty Food Co. Penne Pasta', isActive: false },
      { name: 'Tesco Spaghetti Pasta', isActive: false },
      { name: 'Tesco Linguine Pasta', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Pasta productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Pasta = ({ productType, redirect }) => {

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

export default Main_Pasta;