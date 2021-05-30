import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuantity, newItemCart } from '../../Redux/actions';
import './ProductCard.css';

class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const { addToCart, product, shoppingList, addQuantityCart } = this.props;
    const { id } = product;
    // empyt cart
    if (shoppingList.length === 0) {
      addToCart({
        id,
        quantity: 1,
      })
      return;
    }
    // repeat check
    let repeatItem = false
    shoppingList.forEach((item) => {
      if (item.id === id) {
        repeatItem = true;
        addQuantityCart(item)
      }
    })

    // no repeat item
    if (!repeatItem) {
      addToCart({
        id,
        quantity: 1,
      })
    }
  }

  render() {
    const { product, text } = this.props;
    const { title, thumbnail, price, category_id: CategoryId, id, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <li data-testid="product" className="productCardContainer">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/g13-store/${CategoryId}/${id}`,
            search: text } }
          className="linkProductCard"
        >
          <div className="product-card-img-container">
            <img src={ thumbnail } alt={ `foto-${title}` } />
          </div>
          <div>
            { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
          </div>
          <h4>{ title }</h4>
        </Link>
        { freeShipping ? <p data-testid="free-shipping">Frete gráris</p> : null }
        <button
          className="btn btn-danger"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleAdd }
        >
          Adicionar ao carrinho
        </button>
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingStore.shoppingCart,
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(newItemCart(id)),
  addQuantityCart: (item) => dispatch(addQuantity(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
