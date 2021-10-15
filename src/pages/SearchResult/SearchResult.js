import React, { Component } from 'react';
import ResultPage from './ResultPage';
import './SearchResult.scss';

class SearchResult extends Component {
  render() {
    const { inputSearch, searchWord, isSearch } = this.props;
    return (
      <div className="container">
        <ResultPage />;
      </div>
    );
  }
}

export default SearchResult;
