import React from 'react'
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <div>
      <Link to="/about">Go to about</Link>
      <Link to="/contact">Go to contact</Link>
    </div>
  )
}

export default NavBar