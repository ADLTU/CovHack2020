import React, {Component} from 'react';
import Main from './Main'
import Chicken from './components/Chicken'
import Beef from './components/Beef'
import Lamb from './components/Lamb'
import Pork from './components/Pork'
import Cereals from './components/Cereals'
import Rice from './components/Rice'
import Pasta from './components/Pasta'
import Noodles from './components/Noodles'
import Coffee from './components/Coffee'
import Tea from './components/Tea'
import Biscuits from './components/Biscuits'
import Fruits from './components/Fruits'
import Vegtables from './components/Vegtables'
import Bread from './components/Bread'
import Milk from './components/Milk'
import Butter from './components/Butter'
import Cheese from './components/Cheese'
import Condiments from './components/Condiments'
import Spices from './components/Spices'
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