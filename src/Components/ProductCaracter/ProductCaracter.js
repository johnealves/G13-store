import React, { Component } from 'react';
import './ProductCaracter.css';

class ProductCarateristics extends Component {
  render() {
    const { product } = this.props;
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

export default ProductCarateristics;
