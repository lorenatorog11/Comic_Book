import React, { Component } from 'react';
import axios from 'axios';
import Display from './components/Display';
import PageList from './components/PageList';
import PageGrid from './components/PageGrid';
import { Spinner } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      urlBase: 'https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/issues/',
      apiKey: '?api_key=0b5f5a6a19d3f534d4ef75a04add4654813306ad&format=json&limit=1',
      response: [{
        "aliases": null,
        "api_detail_url": "https://comicvine.gamespot.com/api/issue/4000-6/",
        "cover_date": "1952-10-01",
        "date_added": "2008-06-06 11:10:16",
        "date_last_updated": "2015-07-11 12:08:20",
        "deck": null,
        "description": "<p>The horrors of:</p><p>- Lost race!</p><p>- The man germ!</p><p>- Man in the hood!</p><p>- The things!</p><p>-Stories behind the stars, featuring the legendary battle between Hercules, Hydra and Iolaus!</p><p>Plus, two page long prose-stories.</p>",
        "has_staff_review": false,
        "id": 6,
        "image": {
            "icon_url": "https://comicvine1.cbsistatic.com/uploads/square_avatar/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "medium_url": "https://comicvine1.cbsistatic.com/uploads/scale_medium/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "screen_url": "https://comicvine1.cbsistatic.com/uploads/screen_medium/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "screen_large_url": "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "small_url": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "super_url": "https://comicvine1.cbsistatic.com/uploads/scale_large/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "thumb_url": "https://comicvine1.cbsistatic.com/uploads/scale_avatar/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "tiny_url": "https://comicvine1.cbsistatic.com/uploads/square_mini/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "original_url": "https://comicvine1.cbsistatic.com/uploads/original/5/58993/2645776-chamber_of_chills__13_cgc_8.5.jpg",
            "image_tags": "All Images"
        },
        "issue_number": "13",
        "name": "The Lost Race",
        "site_detail_url": "https://comicvine.gamespot.com/chamber-of-chills-magazine-13-the-lost-race/4000-6/",
        "store_date": null,
        "volume": {
            "api_detail_url": "https://comicvine.gamespot.com/api/volume/4050-1487/",
            "id": 1487,
            "name": "Chamber of Chills Magazine",
            "site_detail_url": "https://comicvine.gamespot.com/chamber-of-chills-magazine/4050-1487/"
        }
    }],
      error: '',
      display: 'list',

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
      this.setState({error: error})
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
    const { display, response, error } = this.state
    return (
      <div>
        <h1>ComicBook</h1>
        <Display display={display} onClickList={this.onClickList} onClickGrid={this.onClickGrid}/>
        {response.length === 0 & error === '' ? <Spinner className='spinner' animation="border" variant="dark" /> : response.length === 0 & error !== '' ? <p>
        Try again later</p> : display === 'list'? <PageList response={response}/> : <PageGrid response={response}/>}
      </div>
    )
  }
}


export default App;
