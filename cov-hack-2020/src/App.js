import React from 'react';

function App() {
  state = [ 'Chicken', 'Beef', 'Lamb', 'Pork', 'Cereals', 'Rice', 'Pasta', 'Noodles']

  return (
    <div className="App">
       { this.state.map(function(item, i){
          return <h1 key={i}> {item}</h1>
        })
       }
    </div>
  );
}

export default App;
