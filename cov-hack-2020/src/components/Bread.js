import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Bread extends Component {
  state = {
    productType: [
      { name: 'Wheat Bread', isActive: false },
      { name: 'White Bread', isActive: false },
      { name: 'Gluten Free Bread', isActive: false },
      { name: '50/50 Bread', isActive: false },
      { name: 'Crust-less Bread', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Bread productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Bread = ({ productType, redirect }) => {

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
                Bread Options
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

export default Main_Bread;