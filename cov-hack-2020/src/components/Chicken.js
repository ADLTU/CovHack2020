import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import {Link} from "react-router-dom";

class Main_Chicken extends Component {
  state = {
    productType: [
      { name: 'Tesco Finest British Cornfed Free Range Whole Chicken', isActive: false },
      { name: 'Tesco British Large Whole Chicken', isActive: false },
      { name: 'Tesco British Chicken Breast Portions', isActive: false },
      { name: 'Tesco 2 British Chicken Breast Fillets', isActive: false }
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards_Chicken productType={this.state.productType} />
      </div>
    )
  }
}

const Cards_Chicken = ({ productType, redirect }) => {

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
                Chicken Options
            </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Main_Chicken;