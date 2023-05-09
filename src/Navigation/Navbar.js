import * as React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.js';

export default class Navbar extends React.Component {
    render() {    
      return (
        <nav className='navbar'>
            <button className='option'> <Link to= "/">Home </Link> </button>
            <button className ='option'><Link to="/About"> About</Link> </button>
            <Dropdown />
        </nav>
      );
    }
  }