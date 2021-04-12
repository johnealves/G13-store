import React, { Component } from 'react';
// import ButtonsCardDetails from '../ButtonsCardDetails/ButtonsCardDetails';
import { Link } from 'react-router-dom';
import PictureCardDetail from '../PictureCardDetail/PictureCardDetail';
import './ProductDetails.css';
import { connect } from 'react-redux';
import { addQuantity, newItemCart } from '../../actions';

class ProductDeatailsCard extends Component {
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
    const { product } = this.props;
    const { title, price, pictures } = product;
    return (
      <div data-testid="product-detail-name" className="productContainer">
        <PictureCardDetail pictures={ pictures } title={ title } />
        <div className="titleDetails">
          <h3>{ title }</h3>
          <h4>
            { price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }
          </h4>
          {/* <ButtonsCardDetails product={ product } /> */}
          <Link to="/g13-store/ShoppingCart">
            <button
              className="btn btn-danger detailsToAddCart"
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.handleAdd }
            >
              Comprar Agora
            </button>
          </Link>
          <button
            className="btn btn-outline-danger detailsToAddCart"
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleAdd }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDeatailsCard);
