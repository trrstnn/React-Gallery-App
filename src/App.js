import React, { Component } from 'react';
import {
  BrowserRouter,
  Route
 
} from 'react-router-dom';
import axios from 'axios';
import apiKey from './config'
// import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';


class App extends Component {
  constructor() {
    super();
    this.state={
      photos:[],
      query:""
    };
  } 

  componentDidMount(){
   this.performSearch();
  }

  performSearch = (query = 'cats') => {
    axios.get(`  https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      
    .then(response => {
      console.log(response.data)
      this.setState({
        photos:response.data.photos.photo,
        query: query
       
      }); 
      
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }
  render(){
    
    return (
      <BrowserRouter>
      <div>
        <Nav onSearch={this.performSearch}/>
        <PhotoList data={this.state.photos} query={this.state.query} /> 
        {/* <Route path={`/`} 
              render={ () => <PhotoList data={this.state.photos} query={this.state.query} /> } />     
        <Route path= '/Cat' 
              render={ () => <PhotoList data={this.state.photos} query={this.state.query} onSearch={this.performSearch} currentQuery="cats" /> } 
              /> */}
              
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
