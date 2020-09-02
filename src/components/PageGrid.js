import React, { Component } from 'react';
import CardGrid from './CardGrid'

export default class PageGrid extends Component {
  render() {
    const { response } = this.props
    return (
      <div id='cardGrid' >
        {response.map( (comic) => {
        return (<CardGrid key={comic.id} name={comic.name} id={comic.id} img={comic.image.original_url} issue_number={comic.issue_number} date_added={comic.date_added} api_detail_url={comic.api_detail_url}/>)})}
      </div>
    )
  }
}
