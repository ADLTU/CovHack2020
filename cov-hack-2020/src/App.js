import React, {Component} from 'react';
import Main from './Main'
import Chicken from './Chicken'
import Beef from './Beef'
import Lamb from './Lamb'
import Pork from './Pork'
import Cereals from './Cereals'
import Rice from './Rice'
import Pasta from './Pasta'
import Noodles from './Noodles'
import Coffee from './Coffee'
import Tea from './Tea'
import Biscuits from './Biscuits'
import Fruits from './Fruits'
import Vegtables from './Vegtables'
import Bread from './Bread'
import Milk from './Milk'
import Butter from './Butter'
import Cheese from './Cheese'
import Condiments from './Condiments'
import Spices from './Spices'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

const hist = createBrowserHistory();

class App extends Component {
  render() {
     return(
    <Router history={hist}>
        <Switch>
      <Route path={"/"} exact component={Main}/>
      <Route path={"/Chicken"} component={Chicken}/>
      <Route path={"/Beef"} component={Beef}/>
    <Route path={"/Lamb"} component={Lamb}/>
    <Route path={"/Pork"} component={Pork}/>
    <Route path={"/Cereals"} component={Cereals}/>
    <Route path={"/Rice"} component={Rice}/>
    <Route path={"/Pasta"} component={Pasta}/>
    <Route path={"/Noodles"} component={Noodles}/>
    <Route path={"/Coffee"} component={Coffee}/>
    <Route path={"/Tea"} component={Tea}/>
    <Route path={"/Biscuits"} component={Biscuits}/>
    <Route path={"/Fruits"} component={Fruits}/>
    <Route path={"/Vegtables"} component={Vegtables}/>
    <Route path={"/Bread"} component={Bread}/>
    <Route path={"/Milk"} component={Milk}/>
    <Route path={"/Butter"} component={Butter}/>
    <Route path={"/Cheese"} component={Cheese}/>
    <Route path={"/Condiments"} component={Condiments}/>
    <Route path={"/Spices"} component={Spices}/>
        </Switch>
    </Router>
  );
  }
}

export default App;