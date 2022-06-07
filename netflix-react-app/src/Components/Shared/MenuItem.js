import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const MenuItem = ({ url, name}) => {

  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={url}>{name}</NavLink>
    </li>
  )
}

MenuItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string
}

export default MenuItem