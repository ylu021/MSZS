import React, { Component } from 'react';
import './App.css';

import FatSearch from './containers/search/fatSearch';
import Banner from './components/common/banner';
import TopArea, { CenterText } from './components/common/topArea';
import BottomArea, { SectionTitle } from './components/common/botArea';
import EventCards from './components/common/eventCard';
import { centerText, sectionTitle } from './components/const';
import { testVars } from './components/const';

class App extends Component {
  render() {
    const eventcards = [testVars['card'], testVars['card'], testVars['card']]
    return (
      <div className='App'>
        <header>
          <Banner />
        </header>
        <div>
          <TopArea>
            <CenterText text={centerText[0]} />
            <FatSearch />
          </TopArea>
          <BottomArea>
            <SectionTitle
              text={sectionTitle['App'][0]}
              link={sectionTitle['App'][1]}
            ></SectionTitle>
            <EventCards cards={eventcards} />
          </BottomArea>
        </div>
      </div>
    );
  }
}

export default App;
