import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './event.css';
import EventHost from '../../components/common/eventhost';

class Event extends Component {
  static propTypes = {
    event: PropTypes.shape({
      host: PropTypes.object,
      name: PropTypes.string,
      location: PropTypes.string,
      time: PropTypes.object,
      spots: PropTypes.number,
      fig: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
      ])
    })
  };
  state = { event: this.props.event };

  render() {
    console.log(this.props.event)
    const {host, name, location, time, spots, fig} = this.state.event;
    return (
      <div>
        <div className='Event'>
          <div>
            <div className='Event-content grid-spacing'>
              <span className='bold-text Event-text Event-spacing'>{name}</span>
              <span className='Event-text'>{location}</span>
              <span className='Event-text'>{time.toString()}</span>
              <span className='Event-spacing'>{spots} spots left</span>
            </div>
            <div className='Event-fig-container'>
              {
                typeof(fig) === 'object' ? fig.map(
                  (g, idx) => <div className='Event-fig grid-spacing'><img
                                key={idx}
                                src={g}
                              /></div>
                ) : <div><img className='Event-fig' src={fig} /></div>
              }
            </div>
          </div>
          <div className='grid-spacing Event-spacing'>
            <span className='bold-text'>Event Host</span>
          </div>
          <div className='grid-spacing'>
            <EventHost host={host} />
            <EventHost host={host} />
          </div>
        </div>
      </div>
    );
  }
}
export default Event;
