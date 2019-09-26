import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import SearchForm from './SearchForm';



class Nav extends Component {
  onSearch = e => this.props.onSearch(e.target.innerText);
  render(){
  
    return(
        <nav className="main-nav">
        <SearchForm onSearch={this.props.onSearch}/>
        <ul>
          <li><NavLink to={`/search/Wildflowers`} onClick={this.onSearch}>Wildflowers</NavLink></li>
          <li><NavLink to={`/search/Coffee`} onClick={this.onSearch}>Coffee</NavLink></li>
          <li><NavLink to={`/search/paintings`} onClick={this.onSearch}>Paintings</NavLink></li>
        </ul>
        
      </nav>
    );
}

}
export default Nav