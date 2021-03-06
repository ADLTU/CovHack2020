import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Rice extends Component {
  state = {
    productType: [
      { name: 'Tesco Microwave Basmati Rice', isActive: false },
      { name: 'Tesco Easy Cook Long Grain Rice', isActive: false },
      { name: 'Tesco Microwave Wholegrain Rice', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Rice productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Rice = ({ productType, redirect }) => {

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
                Rice Options
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

export default Main_Rice;