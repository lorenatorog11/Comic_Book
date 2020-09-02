import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Button, Row, Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

class ModalComic extends Component {
  constructor(){
    super()
    this.state = {
      apiKey: '?api_key=0b5f5a6a19d3f534d4ef75a04add4654813306ad&format=json',
      error:'',
      response: []
    }
    this.getComic = this.getComic.bind(this)
  }
  componentDidMount(){
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
    const { show, handleModal } = this.props
    const { response } = this.state 
    return (
      <div>
        <Modal
          show={show}
          onHide={handleModal}
          dialogClassName="modal-100w"
          centered>
          <Container className='p-0 modalComic'>
            <Row className='px-1 p-0 m-0'>
              <Col xs={12} className='p-0 m-0 d-flex justify-content-end'>
                <Button className='btnClose p-0 px-1' type="submit" onClick={handleModal}>x</Button>
              </Col>
            </Row>
          </Container>
          <Modal.Body className='px-0 pb-2 pt-0 modalComic'>
            <h3>ComicBook</h3>
            {response.length !== 0 ?
            <div className='infoComic'>
              <div className='info'>
                <p><strong>Characters</strong></p>
                <div> 
                  {response.character_credits.map((character, index) => {return(<p key={index}>{character.name}</p>)})}
                </div>
                <p><strong>Teams</strong></p>
                <div>
                  {response.team_credits.map((team, index) => {return(<p key={index}>{team.name}</p>)})}
                </div>
                <p><strong>Locations</strong></p>
                <div>
                  {response.location_credits.map((location, index) => {return(<p key={index}>{location.name}</p>)})}
                </div>
              </div>
              <div className='image'>
                <img src={response.image.original_url} alt={response.name}/>
              </div>
            </div>: null}
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