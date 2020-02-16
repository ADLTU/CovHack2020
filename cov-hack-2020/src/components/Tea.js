import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Tea extends Component {
  state = {
    productType: [
      { name: 'Tetley 240 Teabags', isActive: false },
      { name: 'Yorkshire Teabags', isActive: false },
      { name: 'Twinings Everyday Tea', isActive: false },
      { name: 'Pg Tips Pyramid Tea', isActive: false }
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