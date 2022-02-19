import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
  return <div>
      <header className='header' style={{ backgroundColor:'white' }}>
          <nav>
          <Link to='/' className='link'><span>Preview</span></Link>
          <Link to='form' className='link'><span>Apply</span></Link>
          </nav>
      </header>
  </div>;
}

export default Navbar;
