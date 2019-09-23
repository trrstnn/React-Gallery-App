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
        {/* <Route exact path= '/' 
              render={ () => {this.performSearch('programmer'); return <PhotoList data={this.state.photos} query={this.state.query}/>} } 
              />  */}
        <Route exact path= '/' 
              render={ () =>  <PhotoList data={this.state.photos} query={this.state.query}/> } 
              />    
        <Route  path= '/Cats' 
              render={ () => {this.performSearch('cats'); return <PhotoList data={this.state.photos} query={this.state.query}/>} } 
              />
        <Route  exact path= '/Dogs' 
            render={ () => {this.performSearch('dogs'); return <PhotoList data={this.state.photos} query={this.state.query}/>} } 
            />
        <Route  exact path= '/Computers' 
          render={ () => {this.performSearch('computers'); return <PhotoList data={this.state.photos} query={this.state.query}/>} } 
          />
              
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
