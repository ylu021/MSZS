import React, { Component } from 'react';
import './App.css';

import FatSearch from './containers/search/fatSearch';
import Banner from './components/common/banner';
import TopArea, { CenterText } from './components/common/topArea';
import { centerText } from './components/const'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Banner />
        </header>
        <div>
          <TopArea>
            <CenterText text={centerText[0]} />
            <FatSearch />
          </TopArea>
        </div>
      </div>
    );
  }
}

export default App;
