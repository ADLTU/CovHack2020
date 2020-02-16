import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Cereals extends Component {
  state = {
    productType: [
      { name: 'Nestle Cheerios Honey Cereal ', isActive: false },
      { name: 'Tesco Choco Snaps Cereal ', isActive: false },
      { name: 'Nestle Cookie Crisp Cereal ', isActive: false },
      { name: 'Kelloggs Krave Milk Chocolate Cereal', isActive: false },
      { name: 'Nestle Shreddies Original Cereal ', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Cereals productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Cereals = ({ productType, redirect }) => {

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
                Cereal Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Cereals;