import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Lamb extends Component {
  state = {
    productType: [
      { name: 'Tesco Lamb Whole Leg Joint', isActive: false },
      { name: 'Tesco Lamb Half Leg Joint', isActive: false },
      { name: 'Tesco Lamb Half Shoulder Joint', isActive: false },
      { name: 'Tesco Lamb Diced Leg 300G', isActive: false },
      { name: 'Tesco Lamb Whole Shoulder Joint', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Lamb productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Lamb = ({ productType, redirect }) => {

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
                Lamb Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Lamb;