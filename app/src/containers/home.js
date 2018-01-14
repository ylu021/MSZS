import React, { Component } from 'react';

import FatSearch from './search/fatSearch';

import Modal from '../components/common/modal';
import TopArea, { CenterText } from '../components/common/topArea';
import BottomArea, { SectionTitle } from '../components/common/botArea';
import EventCards from '../components/common/eventCard';
import { centerText, sectionTitle } from '../components/const';
import { testVars } from '../components/const';

class Home extends Component {
  state = { modalOpen: false };
  render() {
    const eventcards = [testVars['card'],testVars['card'],testVars['card'],testVars['card'], testVars['card'], testVars['card']]
    return (
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
        <Modal
          show={this.state.modalOpen}
          onClose={this.state.modalOpen ? this.state.modalOpen=!this.state.modalOpen : undefined}
        >
          im a modal
        </Modal>
      </div>
    );
  }
}

export default Home;
