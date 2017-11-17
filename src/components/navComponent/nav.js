import React, { Component } from 'react';
import{
  Link
} from 'react-router-dom';


class Nav extends Component {
  render() {
    return (
        <div className= 'nav'>
            <ul>
              <li><Link to="/Lorem">Lorem</Link></li>
              <li><Link to="/Where">Where</Link></li>
              <li><Link to="/Why">Why</Link></li>
            </ul>
        </div>
    );
  }
}

export default Nav;
