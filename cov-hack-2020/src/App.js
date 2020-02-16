import React, { Component } from 'react';
import Card from './Cards'

class App extends Component {

  state = {
    productType: [
      { name: 'Chicken', isActive: false },
      { name: 'Beef', isActive: false },
      { name: 'Lamb', isActive: false },
      { name: 'Cereal', isActive: false }
    ]
  }

  render() {
    console.log(this.state.productType)
    return (
      <div className="App">
        <Card productType={this.state.productType} />
      </div>
    )
  }
}


export default App;
