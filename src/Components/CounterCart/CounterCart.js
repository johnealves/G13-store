import React, { Component } from 'react';
import { number } from 'prop-types';
import './CounterCart.css';

class CounterCart extends Component {
  render() {
    const { quant = 0 } = this.props;
    return (
      <div
        className="counter-cart-container"
        data-testid="shopping-cart-size"
      >
        { quant }
      </div>
    );
  }
}

CounterCart.propTypes = {
  quant: number.isRequired,
};

export default CounterCart;
