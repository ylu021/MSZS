import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './event.css';
import EventHost from '../../components/common/eventhost';
import * as action from '../../actions/eventAction';

class Event extends Component {
  static propTypes = {
    eventId: PropTypes.string
  };
  state = {
    eventId: this.props.match.params.id,
    event: {}
  };
  componentDidMount() {
    this.props.dispatch(action.fetchEvent(this.state.eventId));
  }
  getSpots = (event => event.total_num_of_people - event.num_of_people)
  render() {
    const event = this.props.event;
    return (
      <div>
        {event? <div className='Event'>
          <div>
            <div className='Event-content grid-spacing'>
              <span className='bold-text Event-text Event-spacing'>{event.name}</span>
              <span className='Event-text'>Location: {event.location}</span>
              <span className='Event-text'>{event.time.toString()}</span>
              <span className='Event-spacing'>{this.getSpots(event)} spots left</span>
            </div>
            <div className='Event-fig-container'>
              {
                typeof(event.fig) === 'object' ? event.fig.map(
                  (g, idx) => <div className='Event-fig grid-spacing' key={idx}><img
                                src={g}
                                alt=''
                              /></div>
                ) : <div><img className='Event-fig' src={event.fig} alt='' /></div>
              }
            </div>
          </div>
          <div className='grid-spacing Event-spacing'>
            <span className='bold-text'>Event Host</span>
          </div>
          <div className='grid-spacing'>
            <EventHost host={event.host} />
          </div>
        </div> : null
        }
      </div>
    );
  }
}
export default connect((store) => {
  return {
    event: store.events.events[0]
  }
})(Event);
