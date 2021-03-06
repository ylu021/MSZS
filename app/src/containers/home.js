import React, { Component } from 'react';
import { connect } from 'react-redux';
import FatSearch from './search/fatSearch';

import SignupForm from '../containers/form/signup';
import LoginForm from '../containers/form/login';
import Modal from '../components/common/modal';
import TopArea, { CenterText } from '../components/common/topArea';
import BottomArea, { SectionTitle } from '../components/common/botArea';
import EventCards from '../components/common/eventCard';
import { centerText, sectionTitle } from '../components/const';
import { menuLink } from '../components/const';
import * as action from '../actions/eventAction';
import {Auth} from '../routes';

class Home extends Component {
  state = {
    modalOpen: false,
    modalType: '',
    events: [],
    loggedIn: !!localStorage.getItem('user')
  };
  componentDidMount() {
    console.log(this.state, this.props)
    this.props.dispatch(action.fetchEvents());
  }
  updateLogined = (user) => {
    localStorage.setItem('user', JSON.stringify(user.user));
    this.setState({ modalOpen: false, modalType: '', loggedIn: true});
    window.location.reload();
  }
  reRenderPath = (props) => {
    const { match } = props;
    if(match.isExact && match.path === menuLink['join us']['path']) {
      this.setState({ modalOpen: true, modalType: match.path })
    }
    else if(match.isExact && match.path === menuLink['login']['path']) {
      this.setState({ modalOpen: true, modalType: match.path })
    }
  }
  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) {
      this.reRenderPath(nextProps);
    }
  }
  onClose = () => {
    this.setState({ modalOpen: false, modalType: ''})
  }
  render() {
    const eventcards = this.props.events;
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
          onClose={this.onClose}
        >
          {this.state.modalType === '/signup' ?
            <SignupForm />
            : <LoginForm updateLogined={this.updateLogined} />
          }
        </Modal>
      </div>
    );
  }
}

export default connect((store) => {
  return {
    user: store.user,
    events: store.events.events
  }
})(Home);
