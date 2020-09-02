import React, { Component } from 'react';
import moment from 'moment';

export default class CardList extends Component {
  render() {
    const { response } = this.props
    return (
      <div>
        {response.map( comic => {return (
        <div key={comic.id} id='cardList'>
          <img className='img' src={comic.image.original_url} alt={comic.name}/>
          <div>
            <p><strong>{comic.name} #{comic.issue_number}</strong></p>
            <p className='date'>{moment(comic.date_added).format('LL')}</p>
          </div>
        </div>) })}
      </div>
    )
  }
}

