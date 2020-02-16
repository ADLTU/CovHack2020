import React from 'react';
import { Container, Card, Button, CardTitle, Row, Col } from 'reactstrap';
import { Redirect } from 'react-router-dom'

const Cards = ({ productType, redirect }) => {
    console.log(productType, redirect)

    const onClick = (isActive) => {
          console.log(isActive)
          isActive = true
          console.log(isActive)
    }

    const cards = (productType) => {

        return productType.map((product) => {
            return (
                <Col sm="3">
                    <Card body md="auto">
                        <CardTitle> {product.name}</CardTitle>
                        <Button onClick={() => onClick(product.isActive)}> View Cheapest Product </Button>
                    </Card>
                </Col>
            )
        })
    }
    return (
        <Container>
            <h1> Welcome </h1>
            <Row>
                {cards(productType)}
            </Row>

        </Container>

    );
};

export default Cards;