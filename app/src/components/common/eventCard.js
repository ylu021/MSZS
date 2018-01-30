import React from 'react';
import {Link} from 'react-router-dom';
import {menuLink} from '../const';
import './eventCard.css';

const EventCards = ({cards}) => (
  <div className='eventCards'>
    {
      cards.length > 0? cards.map((card, idx) => (
        <EventCard
          key={idx}
          card={card}
        />
      )) : null
    }
  </div>
)

export const EventCard = ({card}) => {
  const spots = card.total_num_of_people - card.num_of_people;
  return (
    <div className='eventCard grid-spacing'>
      <Link
        className='eventCard-link'
        to={`${menuLink['events']['path']}/${card._id}`}
      >
        <div className='eventCard-fig'>
          <img
            src={
            typeof(card.fig) === 'object' ? card.fig[0] : card.fig
            }
            alt=''
          />
        </div>
        <div className='eventCard-desc'>
          <div className='eventCard-desc-item'>
            {spots} free spots
          </div>
          <div className='eventCard-desc-item'>
            <span className='eventCard-desc-bold'>Event name:</span> {card.name}
          </div>
          <div className='eventCard-desc-item'>
            <span className='eventCard-desc-bold'>Location:</span> {card.location}
          </div>
          <div className='eventCard-desc-item'>
            <span className='eventCard-desc-bold'>Time:</span> {card.time.toString()}
          </div>
        </div>
      </Link>
    </div>
  );
}

export const CenterText = ({text}) => (
  <div className='centerText'>
    {text}
  </div>
);

export default EventCards;
