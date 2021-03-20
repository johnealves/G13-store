import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { func, number } from 'prop-types';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IoBagCheckOutline, IoSearch } from 'react-icons/io5';
import CounterCart from '../CounterCart/CounterCart';
import './Header.css';

class Header extends Component {
  handleCategory() {
    return null;
  }

  render() {
    const { setSearchText, handleCategory, quant } = this.props;
    // const { quant } = this.state;
    return (
      <header className="header-container">
        <h1><Link className="header-link-h1" exact to="/g13-store">G13 Store</Link></h1>
        <div className="input-group mb-3">
          <input
            className="form-control"
            id="searchInput"
            type="text"
            data-testid="query-input"
            onChange={ setSearchText }
          />
          <button
            className="btn btn-outline-secondary"
            type="reset"
            onClick={ handleCategory }
            data-testid="query-button"
          >
            <IoSearch />
          </button>
        </div>
        <div className="header-link-container">
          <Link
            className="header-link"
            to="/ShoppingCart"
            data-testid="shopping-cart-button"
          >
            <RiShoppingCartLine />
            <CounterCart quant={ quant } />
          </Link>
          <Link className="header-link" to="/Checkout" data-testid="checkout-products">
            <IoBagCheckOutline />
          </Link>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  setSearchText: func.isRequired,
  handleCategory: func.isRequired,
  quant: number.isRequired,
};

export default Header;
