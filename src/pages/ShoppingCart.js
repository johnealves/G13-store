import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import CardShoppingCart from '../Components/CardShoppingCart/CardShoppingCart';
import Cart from '../services/Data';

export default class ShoppingCart extends Component {
  constructor() {
    super();

    this.addQuantItemcart = this.addQuantItemcart.bind(this);

    this.state = {
      item: Cart,
      total: 0,
    };
  }

  componentDidMount() {
    this.addQuantItemcart();
  }

  addQuantItemcart() {
    let num = 0;
    Cart.forEach((value) => {
      num += value.quantity * value.price;
    });
    this.setState({ total: num });
  }

  render() {
    const { item, total } = this.state;
    if (item.length === 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    }
    return (
      <div>
        {/* <div>
          <Link exact to="/">Volta a pagina inicial</Link>
          <Link to="/Checkout" data-testid="checkout-products">
            checkout
          </Link>
        </div> */}
        <ul className="ulShoppingCart">
          { item
            .map((product) => (
              <CardShoppingCart
                product={ product }
                key={ product.id }
                onClick={ this.addQuantItemcart }
              />
            )) }
          <li className="cardShoppingCartContainer">
            <h5>Total do carrinho</h5>
            <div>
              { total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
