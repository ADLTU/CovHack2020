import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";
const list = [];

class Main_Beef extends Component {
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
        <Cards_Beef productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Beef = ({ productType, redirect }) => {

    const cards = (productType) => {

        return productType.map((product) => {
            return (
                <Col sm="3">
                    <Card body md="auto">
                        <CardTitle> {product.name}</CardTitle>
                        <Button> Add To Cart </Button>

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
                <Link to={'/cart'}>
    <Button style={{float: 'right'}} color="primary"> Go To Cart </Button>
</Link>
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Beef;