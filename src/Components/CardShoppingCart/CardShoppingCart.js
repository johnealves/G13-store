import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuantity, newItemCart, minusQuantity, deleteItem } from '../../Redux/actions';
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

  increaseQuantity() {
    const { product, shoppingList, addQuantityCart, setTotal } = this.props;
    const { id } = product;
    shoppingList.forEach((item) => {
      if (item.id === id) {
        // repeatItem = true;
        addQuantityCart(item)
        this.setState((prevState) => ({
          quantity: prevState.quantity + 1
        }))
        this.totalPriceItem()
      }
    })
    setTotal(product.price)
  }

  decreaseQuantity() {
    const { product, shoppingList, minusQuantityCart, setTotal } = this.props;
    const { id } = product;
    
    shoppingList.forEach((item) => {
      if (item.id === id) {
        // repeatItem = true;
        minusQuantityCart(item)
        this.setState((prevState) => ({
          quantity: prevState.quantity - 1
        }))
        this.totalPriceItem()
      }
    })
    setTotal(-product.price)
  }

  totalPriceItem() {
    const { quantity } = this.state;
    const { product } = this.props;
    const { price } = product;
    return quantity * price;
  }

  removerItem(id) {
    const { shoppingList, deleteItem } = this.props;
    
    shoppingList.forEach((item, index) => (item.id === id) ? console.log(shoppingList.splice(index, 1)): null);
    // deleteItem(indice);
  }

  render() {
    const { product, shoppingList } = this.props;
    const { id, title, thumbnail, price } = product;
    const { quantity } = this.state;
    const totalItem = this.totalPriceItem();
    console.log(shoppingList)
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
          <div className="quantity-container">
            <section className="alter-quantity">
              <button
                className="btn"
                onClick={ this.decreaseQuantity }
                data-testid="product-decrease-quantity"
                type="button"
              >
                -
              </button>
              <input className="form-group quantItem" value={ quantity } />
              <button
                className="btn"
                onClick={ this.increaseQuantity }
                data-testid="product-increase-quantity"
                type="button"
              >
                +
              </button>
            </section>
            <div>
              <p className="remove-item-button" onClick={ () => this.removerItem(id) }>Remover</p>
            </div>
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

const mapStateToProps = (state) => ({
  shoppingList: state.shoppingStore.shoppingCart,
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(newItemCart(id)),
  addQuantityCart: (item) => dispatch(addQuantity(item)),
  minusQuantityCart: (item) => dispatch(minusQuantity(item)),
  deleteItem: (indice) => dispatch(deleteItem(indice)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CardShoppingCart);
