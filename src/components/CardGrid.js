import React, { Component } from 'react';
import ModalComic from './ModalComic';
// import Modal from 'react-bootstrap/Modal';
// import { Col, Button, Row, Container } from 'react-bootstrap';
import moment from 'moment';
import axios from 'axios';


export default class CardGrid extends Component {
  constructor (){
    super ()
    this.state = {
      show: false,
      apiKey: '?api_key=0b5f5a6a19d3f534d4ef75a04add4654813306ad&format=json',
      error:'',
      response: []
    }
    this.handleModal = this.handleModal.bind(this)
    this.getComic = this.getComic.bind(this)
  }
  handleModal () {
    this.setState({
      show: !this.state.show
    })
    this.getComic()
  }
  async getComic () {
    const { apiKey } = this.state
    const { api_detail_url } = this.props
    try {
      const res = await axios.get(`https://cors-anywhere.herokuapp.com/${api_detail_url}${apiKey}`)
      res.data.error === "OK" ? this.setState({ response: res.data.results}) : this.setState({error: res.data.error});
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    const {name, id, img, issue_number, date_added, api_detail_url} = this.props
    const { show } = this.state 
    return (
        <div key={id}>
          <img className='img' src={img} alt={name} onClick={this.handleModal}/>
          <ModalComic show={show} handleModal={this.handleModal} api_detail_url={api_detail_url}/>
          <p><strong>{name} #{issue_number}</strong></p>
          <p className='date'>{moment(date_added).format('LL')}</p>
        </div>)
  }
}
