import React from 'react';
import storeProvider from './storeProvider';

class Timestamp extends React.PureComponent  {
  render() {
    return (
      <div>
        { this.props.timestamp }
      </div>
    );
  }
}

function extraProps(store) {
  return {
    timestamp: store.getState().timestamp
  };
}

export default storeProvider(extraProps)(Timestamp);
