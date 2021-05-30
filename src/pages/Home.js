import React, { Component } from 'react';
import ProductCard from '../Components/ProductCard/ProductCard';
import Categories from '../Components/Categories/Categories';
import { connect } from 'react-redux';
import Loading from '../Components/Loading/Loading';
import { changeExibitionMode, requestInitialHomeList, resetFilter } from '../Redux/actions';
import { RiCloseCircleFill } from 'react-icons/ri';
import '../App.css';
import ProductList from '../Components/ProductList/ProductList';

class Home extends Component {
  constructor(props) {
    super(props)
    this.buttonCloseFilter = this.buttonCloseFilter.bind(this)
    this.handleExibitionMode = this.handleExibitionMode.bind(this)
  }
  componentDidMount() {
    this.renderInitialList()
  }

  renderInitialList() {
    const { requestInitialList } = this.props;
    requestInitialList()
  }

  buttonCloseFilter() {
    const { resetCategory, requestInitialList } = this.props;
    resetCategory();
    requestInitialList();
  }

  handleExibitionMode() {
    const { exibitionMode, changeExibitionMode } = this.props;
    (exibitionMode === 'cards' ? changeExibitionMode('lista'): changeExibitionMode('cards'))
  }

  render() {
    const { homeProductList, exibitionMode } = this.props;
    const { productList, loading, categoryName } = homeProductList;
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
                onClick={ this.buttonCloseFilter }
              />
              Limpar filtros
            </label>
            <Categories handleCategory={ this.exeHandleyCategory } />
          </ul>
        </div>
        {/* <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p> */}
        <div className="filter-list">
        <div>
          {(categoryName) && <span className="category-filter">
            <button onClick={ this.buttonCloseFilter }>
              <RiCloseCircleFill onClick={ this.buttonCloseFilter }/>
            </button>
            <span>Categoria: </span>
            {categoryName}
          </span>}
        </div>
        <div className="exibition-mode">
          <button onClick={ this.handleExibitionMode }>
            <span>Modo de exibição: {exibitionMode}</span>
          </button>
        </div>
        </div>
        <ul>
          { (loading) && <Loading /> }
          {productList
            .map((product) => (
              (exibitionMode === 'cards')
              ? <ProductCard product={product}/>
              : <ProductList product={product}/>
            ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  homeProductList: state.homeProductList,
  exibitionMode: state.ExibitionModeReducer.exibitionMode,
})

const mapDispatchToProps = (dispatch) => ({
  requestInitialList: () => dispatch(requestInitialHomeList()),
  resetCategory: () => dispatch(resetFilter()),
  changeExibitionMode: (mode) => dispatch(changeExibitionMode(mode))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
