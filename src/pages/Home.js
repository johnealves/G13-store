import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import Categories from '../Components/Categories/Categories';
import { connect } from 'react-redux';
import '../App.css';
import Loading from '../Components/Loading/Loading';
import { requestInitialHomeList } from '../actions';

class Home extends Component {
  componentDidMount() {
    this.renderInitialList()
  }

  renderInitialList() {
    const { requestInitialList } = this.props;
    requestInitialList()
  }

  render() {
    const { homeProductList } = this.props;
    const { productList, loading } = homeProductList;
    return (
      <div className="App">
        <div className="left-side form-check">
          <ul className="categories-container">
            <label className="form-check-label" htmlFor="allCategory">
              <input
                className="form-check-input"
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
              <ProductCard product={product}/>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  homeProductList: state.homeProductList,
})

const mapDispatchToProps = (dispatch) => ({
  requestInitialList: () => dispatch(requestInitialHomeList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
