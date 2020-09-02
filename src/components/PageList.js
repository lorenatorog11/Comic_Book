import React, { Component } from 'react';
import CardList from './CardList'

export default class PageList extends Component {
  render() {
    const { response } = this.props
    return (
      <div>
        {response.map( comic => {return (<CardList key={comic.id} name={comic.name} id={comic.id} img={comic.image.original_url} issue_number={comic.issue_number} date_added={comic.date_added} api_detail_url={comic.api_detail_url}/>)})}
      </div>
    )
  }
}

