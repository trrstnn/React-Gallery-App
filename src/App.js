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
      query:"",
      loading: false

    };
  } 

  componentDidMount(){
   this.performSearch();
  }

  performSearch = (query = 'Plants') => {
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
      <BrowserRouter basename="/React-Gallery-App">
      <div>
      <div className="nav-container">
        <div className="app-title">
          <h1>Disclose</h1>
        </div>
        <div className="nav-bar">
          <Nav onSearch={this.performSearch}/>
          </div>
        </div>
        {/* <Route exact path= '/' 
              render={ () => {this.performSearch('programmer'); return <PhotoList data={this.state.photos} query={this.state.query}/>} } 
              />  */}
        <Route exact path= '/' 
              render={ () => 
               <PhotoList data={this.state.photos} query={this.state.query} /> } 
              />
        <Route exact path= '/:query' 
        render={ () => 
          <PhotoList data={this.state.photos} query={this.state.query} /> } 
        />        
        <Route  path= '/Wildflowers' 
              render={ () => {this.performSearch('wildflowers'); return <PhotoList data={this.state.photos} query={this.state.query}/>} } 
            />
        <Route  exact path= '/Coffee' 
            render={ () => {this.performSearch('espresso'); return <PhotoList data={this.state.photos} query={"Coffee"}/>} } 
            />
        <Route  exact path= '/Art' 
          render={ () => {this.performSearch('paintings'); return <PhotoList data={this.state.photos} query={"Art"}/>} } 
            />
              
        
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
