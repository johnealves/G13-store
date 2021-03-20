import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cart from '../../services/Data';
import './CardShoppingCart.css';

class CardShoppingCart extends Component {
  constructor(props) {
    super(props);
    const { quantity } = props.product;
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.totalPriceItem = this.totalPriceItem.bind(this);
    this.state = { quantity };
  }

  increaseQuantity(product, quantity) {
    const { product: { availableQuantity } } = this.props;
    if (quantity >= 0 && quantity < availableQuantity) {
      Cart.forEach((value) => {
        if (value.title === product.title) {
          value.quantity += 1;
          this.setState({ quantity: quantity + 1 });
        }
      });
      const { onClick } = this.props;
      onClick();
    }
  }

  decreaseQuantity(product, quantity) {
    if (quantity > 0) {
      Cart.forEach((value) => {
        if (value.title === product.title) {
          value.quantity -= 1;
          this.setState({ quantity: quantity - 1 });
        }
      });
      const { onClick } = this.props;
      onClick();
    }
  }

  totalPriceItem() {
    const { quantity } = this.state;
    const { product } = this.props;
    const { price } = product;
    return quantity * price;
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    const { quantity } = this.state;
    const totalItem = this.totalPriceItem();
    return (
      <li className="cardShoppingCartContainer">
        <div>
          <img src={ thumbnail } alt={ `imagem ${title}` } />
          <div className="itemCart">
            <h6 data-testid="shopping-cart-product-name">{ title }</h6>
            <p>
              { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
            </p>
          </div>
        </div>
        <div className="quantCartControl">
          <div>
            <button
              className="btn"
              onClick={ () => this.decreaseQuantity(product, quantity) }
              data-testid="product-decrease-quantity"
              type="button"
            >
              -
            </button>
            <input className="form-group mb-3" value={ quantity } />
            <button
              className="btn"
              onClick={ () => this.increaseQuantity(product, quantity) }
              data-testid="product-increase-quantity"
              type="button"
            >
              +
            </button>
          </div>
          <div className="total-price-container">
            <h5>Total: </h5>
            { totalItem.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
          </div>
        </div>
      </li>
    );
  }
}

CardShoppingCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    availableQuantity: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardShoppingCart;
