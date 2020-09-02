import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Button, Row, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import axios from 'axios';

class ModalComic extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     apiKey: '?api_key=0b5f5a6a19d3f534d4ef75a04add4654813306ad&format=json',
  //     error:'',
  //     response: []
  //   }
  //   this.getComic = this.getComic.bind(this)
  // }
  // componentDidMount(){
  //   this.getComic ()
  // }
  // async getComic () {
  //   const { apiKey } = this.state
  //   const { api_detail_url } = this.props
  //   try {
  //     const res = await axios.get(`https://cors-anywhere.herokuapp.com/${api_detail_url}${apiKey}`)
  //     res.data.error === "OK" ? this.setState({ response: res.data.results}) : this.setState({error: res.data.error});
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  render() {
    const { show, handleModal } = this.props
    return (
      <div>
        <Modal
          show={show}
          onHide={handleModal}
          centered>
          <Container className='px-4 pt-3 pb-0'>
            <Row className='p-1 pb-0 m-0'>
              <Col xs={12} className='p-0 m-0 d-flex justify-content-end'>
                <Button className='btnClose btn text-center p-0' type="submit" onClick={handleModal}>Cerrar</Button>
              </Col>
            </Row>
          </Container>
          <Modal.Body className='px-4 pb-2 pt-0'>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

ModalComic.propTypes = {
  handleModal: PropTypes.func,
  show: PropTypes.bool
}

export default ModalComic;