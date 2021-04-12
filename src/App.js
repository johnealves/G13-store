import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import Header from './Components/Header/Header';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/g13-store" component={ Home } />
          <Route path="/g13-store/ShoppingCart" component={ ShoppingCart } />
          <Route path="/g13-store/Checkout" component={ Checkout } />
          <Route
            path="/g13-store/:category/:id"
            render={ (props) => (
              <ProductDetails { ...props } />
            ) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
