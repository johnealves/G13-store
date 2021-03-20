import React, { Component } from 'react';
import { shape, func } from 'prop-types';
// import ButtonsCardDetails from '../ButtonsCardDetails/ButtonsCardDetails';
import { Link } from 'react-router-dom';
import PictureCardDetail from '../PictureCardDetail/PictureCardDetail';
import './ProductDetails.css';

class ProductDeatailsCard extends Component {
  render() {
    const { product, onClick } = this.props;
    console.log(product);
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
          <Link to="/ShoppingCart">
            <button
              className="btn btn-danger detailsToAddCart"
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ onClick }
            >
              Comprar Agora
            </button>
          </Link>
          <button
            className="btn btn-outline-danger detailsToAddCart"
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ onClick }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDeatailsCard.propTypes = {
  product: shape().isRequired,
  onClick: func.isRequired,
};

export default ProductDeatailsCard;
