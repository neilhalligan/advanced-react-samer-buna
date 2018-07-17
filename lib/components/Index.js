import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 54
  }

  asyncFunction() {
    return Promise.resolve(26);
  }
  
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunction()
    });
  }
  render() {
    return (
      <h2> Hi there -- {this.state.answer}</h2>
    );
  }
}

export default App;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
