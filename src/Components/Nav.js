import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import SearchForm from './SearchForm';



class Nav extends Component {
  
  render(){
  
    return(
        <nav className="main-nav">
        <SearchForm onSearch={this.props.onSearch}/>
        <ul>
          <li><NavLink to={`/Wildflowers`}>Wildflowers</NavLink></li>
          <li><NavLink to={`/Coffee`}>Coffee</NavLink></li>
          <li><NavLink to={`/Art`}>Art</NavLink></li>
        </ul>
        
      </nav>
    );
}

}
export default Nav