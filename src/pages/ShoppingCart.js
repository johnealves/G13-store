import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardShoppingCart from '../Components/CardShoppingCart/CardShoppingCart';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.fetchShoppingCart = this.fetchShoppingCart.bind(this);
    this.setTotal = this.setTotal.bind(this);

    this.state = {
      item: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.fetchShoppingCart()
  }

  async fetchShoppingCart() {
    const { shoppingCartList } = this.props;
    shoppingCartList.forEach(async (item) => {
      const fecthID = await fetch(`https://api.mercadolibre.com/items?ids=${item.id}`)
      const resp = await fecthID.json();
      const product = await resp[0].body
      const { id, title, thumbnail, price } = product;
      this.setState((prevState) => ({
        item: [...prevState.item, {
          id,
          title,
          thumbnail,
          price,
          quantity: item.quantity,
          }],
        total: prevState.total + (price * item.quantity)
      }))
    })
  }

  setTotal(value) {
    this.setState((prev) => ({
      total: prev.total + value
    }))
  }

  render() {
    const { item, total } = this.state;
    if (item.length === 0) {
      return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    }
    return (
      <div>
        <ul className="ulShoppingCart">
          { item
            .map((product) => (
              <CardShoppingCart
                product={ product }
                key={ product.id }
                setTotal={ this.setTotal }
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

const mapStateToProps = (state) => ({
 shoppingCartList: state.shoppingStore.shoppingCart,
});

export default connect(mapStateToProps)(ShoppingCart);
