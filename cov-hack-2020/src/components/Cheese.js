import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Cheese extends Component {
  state = {
    productType: [
      { name: 'Pilgrims Choice Mature Cheddar Cheese ', isActive: false },
      { name: 'Cathedral City Mature Cheddar Cheese', isActive: false },
      { name: 'Cathedral City Extra Mature Cheddar Cheese', isActive: false },
      { name: 'Tesco British Medium Cheddar Cheese', isActive: false },
      { name: 'Pilgrims Choice Extra Mature Cheddar Cheese', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Cheese productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Cheese = ({ productType, redirect }) => {

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
                Cheese Options
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

export default Main_Cheese;