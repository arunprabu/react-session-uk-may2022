// Functional Component with Arrow Function 
import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {

  // const routes = [
  //   { id: 1, name: 'Home', url: '/' },
  //   { id: 2, name: 'HOC Demo', url: '/hoc-demo' },
  // ]

  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hoc-demo">HOC Demo</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/unit-testing ">Unit Testing Demo</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hooks">Todo App (Hooks Demo)</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/context-api-demo">Products (Context API Demo)</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/styled-comp-demo">Support (StyledComponents Demo)</Link>
      </li>
    </ul>
  )
}

export default Menu;
