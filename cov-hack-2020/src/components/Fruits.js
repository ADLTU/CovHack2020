import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Fruits extends Component {
  state = {
    productType: [
      { name: 'Tesco Seedless Grape Selection Pack', isActive: false },
      { name: 'Tesco Strawberries', isActive: false },
      { name: 'Tesco Bananas Loose', isActive: false },
      { name: 'Tesco Golden Delicious Apples Loose', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Fruits productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Fruits = ({ productType, redirect }) => {

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
                <Button> Go Back </Button>
            </Link>
                Fruits Options
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

export default Main_Fruits;