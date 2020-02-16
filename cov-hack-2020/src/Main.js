import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, Row, Col, CardImg } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
import {Link} from 'react-router-dom'

class Main extends Component {
  state = {
    productType: [
      { name: 'Chicken',    isActive: false, img: require('./assets/chicken.jpg')   },
      { name: 'Beef',       isActive: false, img: require('./assets/beef.jpg')     },
      { name: 'Lamb',       isActive: false, img: require('./assets/lamb.jpg')      },
      { name: 'Cereals',    isActive: false, img: require('./assets/cereals.jpg')   },
      { name: 'Rice',       isActive: false, img: require('./assets/rice.jpg')      },
      { name: 'Pasta',      isActive: false, img: require('./assets/pasta.jpg')     },
      { name: 'Noodles',    isActive: false, img: require('./assets/noodles.jpg')   },
      { name: 'Coffee',     isActive: false, img: require('./assets/coffee.jpg')    },
      { name: 'Tea',        isActive: false, img: require('./assets/tea.jpg')       },
      { name: 'Biscuits',   isActive: false, img: require('./assets/biscuits.jpg')  },
      { name: 'Fruits',     isActive: false, img: require('./assets/fruits.jpg')    },
      { name: 'Vegetables',  isActive: false, img: require('./assets/vegetables.jpg') },
      { name: 'Bread',      isActive: false, img: require('./assets/bread.jpg')     },
      { name: 'Milk',       isActive: false, img: require('./assets/milk.jpg')      },
      { name: 'Butter',     isActive: false, img: require('./assets/butter.jpg')    },
      { name: 'Cheese',     isActive: false, img: require('./assets/cheese.jpg')    },
      { name: 'Condiments', isActive: false, img: require('./assets/condiments.jpg')},
      { name: 'Spices',     isActive: false, img: require('./assets/spices.jpg')    },
    ]
  }

  render() {
    return (
      <div className="App">
        <Cards productType={this.state.productType} />
      </div>
    )
  }
}

const Cards = ({ productType, redirect }) => {

    const cards = (productType) => {

        return productType.map((product) => {
            console.log(product.img)
            return (
                <Col sm="3">
                    <Card  body md="auto">
                        <CardImg width="50" height="130" src={product.img}/>
                        <CardTitle> {product.name}</CardTitle>
                        <Link to={'/'+product.name}>
                        <Button> View Products </Button>
                        </Link>
                    </Card>
                </Col>
            )
        })
    }
    return (
        <Container>
            <h1> Welcome
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

export default Main;