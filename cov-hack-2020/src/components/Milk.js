import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Milk extends Component {
  state = {
    productType: [
      { name: 'Tesco British Semi Skimmed Milk', isActive: false },
      { name: 'Tesco British Whole Milk', isActive: false },
      { name: 'Tesco British Skimmed Milk', isActive: false },
      { name: 'Alpro Almond Roasted Unsweetened Fresh Drink Alternative', isActive: false },
      { name: 'Alpro Soya Fresh Drink', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Milk productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Milk = ({ productType, redirect }) => {

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
                Milk Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Milk;