import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './search.scss';
import SearchResult from '../SearchResult/SearchResult';
import { findByDisplayValue } from '@testing-library/react';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: [],
      searchWord: '',
      isSearch: false,
    };
  }

  // componentDidMount() {
  //   fetch('#')
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ inputSearch: data });
  //     });
  // }

  handleSearchWord = e => {
    this.setState({
      searchWord: e.target.value,
    });
  };

  handelerSearch = () => {
    const { isSearch } = this.state;
    this.setState({ isSearch: !isSearch });
  };

  handleSearchResult = () => {
    debugger;
    const { searchWord } = this.state;
    if (searchWord.length > 0) {
      // this.props.history.push('/search-result');
      this.setState({
        searchWord: '',
        isSearch: true,
      });
    }
  };

  enterSearchBtn = e => {
    debugger;
    if (e.key === 'Enter') {
      this.handleSearchResult();
    }
  };

  render() {
    // console.log(this.state.searchWord);
    const { searchWord } = this.state;
    // const filtered = inputSearch.filter(searchdata =>
    //   searchdata.name.includes(searchWord)
    // );
    const isSearch = this.state.isSearch;
    return (
      <>
        <div className="search">
          <input
            name="inputSerach"
            className="searchInput"
            type="search"
            placeholder="더 풍성하게 돌아온 NEW 기프트"
            onChange={this.handleSearchWord}
            onKeyPress={this.enterSearchBtn}
            value={searchWord}
          />
          <button
            className="searchBtn"
            onClick={this.handleSearchResult}
            // searchWord={this.state.searchWord}
          >
            <i className="fas fa-search fa-3x" />
          </button>
        </div>
        {isSearch && <SearchResult searchWord={this.state} />}
      </>
    );
  }
}

export default withRouter(Search);
