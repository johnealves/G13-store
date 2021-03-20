import React, { Component } from 'react';
import { shape } from 'prop-types';
import './ProductCaracter.css';

class ProductCarateristics extends Component {
  render() {
    const { product } = this.props;
    console.log(product);
    return (
      <table className="table-container">
        { product.attributes
          .map(({ id, name, value_name: value }) => (
            <tr key={ id }>
              <th>{ name }</th>
              <td>{ value }</td>
            </tr>
          )) }
      </table>
    );
  }
}

ProductCarateristics.propTypes = {
  product: shape().isRequired,
};

export default ProductCarateristics;
