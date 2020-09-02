import React, { Component } from 'react';
import ModalComic from './ModalComic';
import moment from 'moment';

export default class CardList extends Component {
  constructor (){
    super ()
    this.state = {
      show: false
    }
    this.handleModal = this.handleModal.bind(this)
  }
  handleModal () {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    const {name, id, img, issue_number, date_added, api_detail_url} = this.props
    const { show } = this.state 
    return (
        <div key={id} id='cardList'>
          <img className='img' src={img} alt={name} onClick={this.handleModal}/>
          <ModalComic show={show} handleModal={this.handleModal} api_detail_url={api_detail_url}/>
          <div>
            <p><strong>{name} #{issue_number}</strong></p>
            <p className='date'>{moment(date_added).format('LL')}</p>
          </div>
        </div>)
  }
}

