import React, { Component } from 'react';
import { string, bool, arrayOf, shape, func } from 'prop-types';
import ProductCard from '../Components/ProductCard/ProductCard';
import Categories from '../Components/Categories/Categories';
import Loading from '../Components/Loading/Loading';
import '../App.css';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.exeHandleyCategory = this.exeHandleyCategory.bind(this);
  }

  exeHandleyCategory(event) {
    const { handleCategory } = this.props;
    handleCategory(event);
  }

  render() {
    const { searchText, loading, productList, CounterCart, handleCategory } = this.props;
    return (
      <div className="App">
        <div className="left-side form-check">
          <ul className="categories-container">
            <label className="form-check-label" htmlFor="allCategory">
              <input
                className="form-check-input"
                onClick={ handleCategory }
                id="allCategory"
                type="radio"
                name="selectedCategory"
                value=""
              />
              Limpar filtros
            </label>
            <Categories handleCategory={ this.exeHandleyCategory } />
          </ul>
        </div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ul>
          { (loading) ? <Loading /> : null }
          {productList
            .map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
                text={ searchText }
                onClick={ () => CounterCart() }
              />
            ))}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  searchText: string.isRequired,
  loading: bool.isRequired,
  productList: arrayOf(shape()).isRequired,
  CounterCart: func.isRequired,
  handleCategory: func.isRequired,
};
