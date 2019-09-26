import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
 Switch
 
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
      loading: true

    };
  } 

  componentDidMount(){
   this.performSearch();
  }

  performSearch = (query = 'plants') => {
    axios.get(`  https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      
    .then(response => {
      this.setState({
        photos:response.data.photos.photo,
        query: query,
        loading: false
       
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
            {
              (this.state.loading)
              ? <h1>Loading...</h1>
              : 
            <Switch>
              <Route exact path= '/' 
                render={ () =>   <PhotoList data={this.state.photos} query={this.state.query}/> }/> 
            
              <Route path= '/search/:query' 
                render={ () => 
                  <PhotoList data={this.state.photos} query={this.state.query} onSearch={this.performSearch} loading={this.state.loading} /> } 
                />   
            </Switch>
            }
        </div>
     
        
          
      </BrowserRouter>
    );
  }
}

export default App;
