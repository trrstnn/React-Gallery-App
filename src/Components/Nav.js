import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchForm from './SearchForm';

const Nav = (props) =>{
    return(
        <nav class="main-nav">
        <SearchForm onSearch={props.onSearch}/>
        <ul>
          <li><NavLink to={`/Cats`}>Cats</NavLink></li>
          <li><NavLink to={`/Dogs`}>Dogs</NavLink></li>
          <li><NavLink to={`/Computers`}>Computers</NavLink></li>
        </ul>
        
      </nav>
    );

}
export default Nav