import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Pork extends Component {
  state = {
    productType: [
      { name: 'Tesco Pork Loin Joint', isActive: false },
      { name: 'Tesco Large Vacuum Pack Pork Shoulder Joint', isActive: false },
      { name: 'Tesco Large Pork Leg Joint', isActive: false },
      { name: 'Tesco Pork Crackling Leg 1Kg', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Pork productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Pork = ({ productType, redirect }) => {

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
                Pork Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Pork;