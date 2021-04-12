import React, { Component } from 'react';
import * as api from '../../services/api';
import './Categories.css';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import { requestCategoryApi } from '../../actions';

class Categories extends Component {
  constructor(state) {
    super(state);

    this.handleClick = this.handleClick.bind(this);

    this.state = {
      categories: [],
      loading: true,
    };
  }

  async componentDidMount() {
    await api.getCategories().then((data) => {
      this.setState({ categories: data, loading: false });
    });
  }

  handleClick({target: { value }}) {
    const { setCategory, searchText } = this.props;
    console.log(searchText)
    setCategory(value, searchText)
  }
  render() {
    const { categories, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div className="wrapper-category">
        {categories.map((category) => (
          (category.id !== 'MLB1540')
            && (
              <li key={ category.id }>
                <label data-testid="category" htmlFor={ category.id }>
                  <input
                    onClick={ this.handleClick }
                    type="radio"
                    id={ category.id }
                    name="selectedCategory"
                    value={ category.id }
                  />
                  {category.name}
                </label>
              </li>
            )
        ))}

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchText: state.homeProductList.searchTextApi,
})

const mapDispatchToProps = (dispatch) => ({
  setCategory: (value, searchText) => dispatch(requestCategoryApi(value, searchText))
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
