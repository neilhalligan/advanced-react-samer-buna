import React, { Component } from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import pickBy from 'lodash.pickby';
import PropTypes from 'prop-types';

class App extends Component {
  state = this.props.store.getState();

  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  setSearchTerm = (searchTerm) => {
    this.props.store.setSearchTerm(searchTerm);
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      const searchRE = new RegExp(searchTerm, 'i');
      articles = pickBy(articles, (value) => {
        return value.title.match(searchRE) ||
          value.body.match(searchRE);
      });
    }
    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList
          articles = {articles}
        />
      </div>
    );
  }
}

export default App;
