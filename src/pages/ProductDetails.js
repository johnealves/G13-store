import React, { Component } from 'react';
import Loading from '../Components/Loading/Loading';
import '../Components/ProductDetailCard/ProductDetails.css';
import AvaliationForm from '../Components/AvaliationForm/AvaliationForm';
import ProductDeatailsCard from '../Components/ProductDetailCard/ProductDetailscard';
import ProductCarateristics from '../Components/ProductCaracter/ProductCaracter';

export default class ProductDetails extends Component {
  constructor(state) {
    super(state);

    this.searchForID = this.searchForID.bind(this);

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

  render() {
    const { product, loading } = this.state;
    return (
      <div>
        { (loading)
          ? <Loading />
          : (
            <>
              <ProductDeatailsCard product={ product } />
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
