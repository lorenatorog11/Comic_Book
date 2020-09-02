import React, { Component } from 'react';
import axios from 'axios';
import Display from './components/Display';
import CardList from './components/CardList';
// import CardGrid from './components/CardGrid';
import PageGrid from './components/PageGrid';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      urlBase: 'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/',
      apiKey: '?api_key=0b5f5a6a19d3f534d4ef75a04add4654813306ad&format=json&limit=4',
      response: [],
      error: '',
      display: 'grid',

    }
    this.getComics = this.getComics.bind(this)
    this.onClickList = this.onClickList.bind(this)
    this.onClickGrid = this.onClickGrid.bind(this)
  }
  componentDidMount(){
    this.getComics ()
  }
  async getComics () {
    const { urlBase, apiKey } = this.state
    try {
      const res = await axios.get(`${urlBase}${apiKey}`)
      res.data.error === "OK" ? this.setState({ response: res.data.results}) : this.setState({error: res.data.error});
    } catch (error) {
      console.log(error)
    }
  }
  onClickList (){
    this.setState({
      display: 'list'
    })
  }  
  onClickGrid (){
    this.setState({
      display: 'grid'
    })
  }
  render() {
    const { display, response } = this.state
    return (
      <div>
        <h1>ComicBook</h1>
        <Display display={display} onClickList={this.onClickList} onClickGrid={this.onClickGrid}/>
        {display === 'list'? <CardList response={response}/> : <PageGrid response={response}/>}
      </div>
    )
  }
}


export default App;
