import React from 'react';
import {Route, NavLink,Redirect} from 'react-router-dom';
import App from '../App'

const Nav = () =>{
    return(
        <nav class="main-nav">
        <ul>
          <li><NavLink to={`/Cats`}>Cats</NavLink></li>
          <li><NavLink to={`/Dogs`}>Dogs</NavLink></li>
          <li><NavLink to={`/Computers`}>Computers</NavLink></li>
        </ul>
        <Route path={`/Cats`} 
           render={ () => <App  /> } />         
        <Route path={`Dogs`} 
              render={ () => <App  /> } />     
        <Route path={`Computers`} 
              render={ () => <App  /> } />
      </nav>
    );

}
export default Nav