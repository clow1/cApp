import * as React from 'react';
import { Link, NavLink} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
    render() {    
      return (
        <nav className='navbar'>
            <Link to= "/">Home </Link>
            <Link to="/About"> About</Link>
            <Link to="/">Test</Link>
        </nav>
      );
    }
  }