import React, { Component } from 'react';
// import ModalComic from './ModalComic'
import Modal from 'react-bootstrap/Modal';
import { Col, Button, Row, Container } from 'react-bootstrap';
import moment from 'moment';

export default class CardGrid extends Component {
  constructor (){
    super ()
    this.state = {
      show: false,
      url: ''
    }
    this.handleModal = this.handleModal.bind(this)
    this.uploadUrl = this.uploadUrl.bind(this)
  }
  handleModal () {
    this.setState({
      show: !this.state.show
    })
  }
  uploadUrl (url) {
    console.log(url)
  }
  render() {
    const { response } = this.props
    return (
      <div id='cardGrid' >
        {response.map( (comic, index) => {
        return (
        <div key={index} onClick={this.uploadUrl(comic.name)} >
          <img className='img' src={comic.image.original_url} alt={comic.name} onClick={this.handleModal}/>
          <p><strong>{comic.name} #{comic.issue_number}</strong></p>
          <p className='date'>{moment(comic.date_added).format('LL')}</p>
        </div>) })}
        <Modal
          show={this.state.show}
          onHide={this.handleModal}
          centered>
          <Container className='px-4 pt-3 pb-0'>
            <Row className='p-1 pb-0 m-0'>
              <Col xs={12} className='p-0 m-0 d-flex justify-content-end'>
                <Button className='btnClose btn text-center p-0' type="submit" onClick={this.handleModal}>Cerrar</Button>
              </Col>
            </Row>
          </Container>
          <Modal.Body className='px-4 pb-2 pt-0'>
            <h1>Lor</h1>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}
