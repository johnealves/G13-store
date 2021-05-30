import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { IoBagCheckOutline, IoSearch } from 'react-icons/io5';
import CounterCart from '../CounterCart/CounterCart';
import './Header.css';
import { connect } from 'react-redux';
import { headerRequestApi, saveSearchField } from '../../Redux/actions';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleClick() {
    const { buttonSearch, infoSearch } = this.props;
    const { searchTextApi, catecoryApi } = infoSearch;
    buttonSearch(catecoryApi, searchTextApi)
  }

  handleKeyUp({keyCode}) {
    if (keyCode === 13) {
      this.handleClick()
    }
  }

  render() {
    const { setSearchText, quantity } = this.props;
    localStorage.setItem('shoppingCart', JSON.stringify(quantity));
    let totalQuantity = 0
    quantity.forEach(({ quantity }) => {
      totalQuantity += quantity
    })
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
            onKeyUp={ this.handleKeyUp }
          />
          <button
            className="btn btn-outline-secondary"
            type="reset"
            onClick={ this.handleClick }
            data-testid="query-button"
          >
            <IoSearch />
          </button>
        </div>
        <div className="header-link-container">
          <Link
            className="header-link"
            to="/g13-store/ShoppingCart"
            data-testid="shopping-cart-button"
          >
            <RiShoppingCartLine />
            <CounterCart quant={ totalQuantity } />
          </Link>
          <Link className="header-link" to="/g13-store/Checkout" data-testid="checkout-products">
            <IoBagCheckOutline />
          </Link>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  infoSearch: state.homeProductList,
  quantity: state.shoppingStore.shoppingCart,
})

const mapDispatchToProps = (dispatch) => ({
  setSearchText: ({target: {value}}) => dispatch(saveSearchField(value)),
  buttonSearch: (category, query) => dispatch(headerRequestApi(category, query)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
