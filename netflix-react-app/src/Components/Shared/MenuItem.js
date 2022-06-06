import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const MenuItem = ({ url, name}) => {

  return (
    <li className="nav-item">
      <Link className="nav-link" to={url}>{name}</Link>
    </li>
  )
}

MenuItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string
}

export default MenuItem