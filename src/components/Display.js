import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class Display extends Component {
  render() {
    const { display } = this.props
    return (
      <div id='display'>
        <p><strong>Latest Issues</strong></p>
        <section>
          {display === 'grid'? <button type='submit' onClick={this.props.onClickList} className='active'><FontAwesomeIcon icon={faList} /> List</button> : <button type='submit' onClick={this.props.onClickList}><FontAwesomeIcon icon={faList} /> List</button> }
          {display === 'list'? <button type='submit' onClick={this.props.onClickGrid} className='active'><FontAwesomeIcon icon={faTh} /> Grid</button> : <button type='submit' onClick={this.props.onClickGrid}><FontAwesomeIcon icon={faTh} /> Grid</button> }
        </section>
      </div>
    )
    }
  
}
Display.propTypes = {
  onClickList: PropTypes.func,
  onClickGrid: PropTypes.func,
  display: PropTypes.string
}
export default Display;
