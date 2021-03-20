import React, { Component } from 'react';
import PropTypes, { func } from 'prop-types';
import Cart from '../services/Data';
import Loading from '../Components/Loading/Loading';
import '../Components/ProductDetailCard/ProductDetails.css';
import AvaliationForm from '../Components/AvaliationForm/AvaliationForm';
import ProductDeatailsCard from '../Components/ProductDetailCard/ProductDetailscard';
import ProductCarateristics from '../Components/ProductCaracter/ProductCaracter';

export default class ProductDetails extends Component {
  constructor(state) {
    super(state);

    this.searchForID = this.searchForID.bind(this);
    this.addCartItem = this.addCartItem.bind(this);

    this.state = {
      product: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    this.searchForID(id);
  }

  searchForID(id) {
    fetch(`https://api.mercadolibre.com/items?ids=${id}`)
      .then((resp) => resp.json())
      .then((result) => this.addProductOnState(result[0].body));
  }

  addProductOnState(selectedProduct) {
    this.setState({ product: selectedProduct, loading: false });
  }

  addCartItem() {
    const { product } = this.state;
    const check = Cart.some((value) => value.title === product.title);
    if (check) {
      Cart.forEach((cartItem) => {
        if (cartItem.title === product.title) {
          // const add = document.querySelector('.numberToAdd');
          // const num = parseInt(add.value, 10);
          cartItem.quantity += 1;
        }
      });
    } else {
      // const add = document.querySelector('.numberToAdd');
      // const num = parseInt(add.value, 10);
      const { title, thumbnail, price } = product;
      Cart.push({
        title,
        thumbnail,
        price,
        quantity: 1,
      });
    }
    const { CounterCart } = this.props;
    CounterCart();
  }

  render() {
    const { product, loading } = this.state;
    return (
      <div>
        { (loading)
          ? <Loading />
          : (
            <>
              <ProductDeatailsCard product={ product } onClick={ this.addCartItem } />
              <div className="table-structure">
                <h3>Caracteristicas</h3>
                <ProductCarateristics product={ product } />
              </div>
            </>
          )}
        <AvaliationForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  CounterCart: func.isRequired,
};
