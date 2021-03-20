import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import * as api from './services/api';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import './App.css';
import Header from './Components/Header/Header';
import Cart from './services/Data';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleCategory = this.handleCategory.bind(this);
    this.setSearchText = this.setSearchText.bind(this);
    this.CounterCart = this.CounterCart.bind(this);

    this.state = {
      searchText: '',
      productList: [],
      loading: false,
      quant: 0,
    };
  }

  componentDidMount() {
    this.CounterCart();
  }

  async handleCategory({ target }) {
    this.setState({ loading: true });
    const { searchText } = this.state;
    const { value } = target;
    if (value !== 'MLB1540') {
      await api.getProductsFromCategoryAndQuery(value, searchText)
        .then((response) => {
          const list = response.results;
          this.setState({ productList: list });
        })
        .catch((error) => error);
    }
    this.setState({ loading: false });
  }

  setSearchText({ target }) {
    this.setState({ searchText: target.value });
  }

  CounterCart() {
    let counter = 0;
    Cart.forEach((product) => { counter += product.quantity; });
    this.setState({ quant: counter });
  }

  render() {
    const { searchText, loading, productList, quant } = this.state;
    return (
      <Router>
        <Header
          setSearchText={ this.setSearchText }
          handleCategory={ this.handleCategory }
          quant={ quant }
        />
        <Switch>
          <Route
            exact
            path="/g13-store"
            render={ (props) => (
              <Home
                { ...props }
                searchText={ searchText }
                loading={ loading }
                productList={ productList }
                handleCategory={ this.handleCategory }
                CounterCart={ this.CounterCart }
              />
            ) }
          />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/Checkout" component={ Checkout } />
          <Route
            path="/:category/:id"
            render={ (props) => (
              <ProductDetails { ...props } CounterCart={ this.CounterCart } />
            ) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
