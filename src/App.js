import React, { Component } from 'react';
import Header from './elements/Header'

class App extends Component {
  state = {
    favourites: [],
    watchList: [],
  }

  render() {
    return (
      <div className='parakeet'>
        <Header
          favCount={this.state.favourites.length}
          listCount={this.state.watchList.length}
        />
      </div>
    );
  }
}

export default App;
