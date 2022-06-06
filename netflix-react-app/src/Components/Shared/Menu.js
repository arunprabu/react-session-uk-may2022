// Functional Component with Arrow Function 
import React from 'react';
import MenuItem from './MenuItem';

const Menu = () => {

  const routes = [
    { id: 1, name: 'Home', url: '/' },
    { id: 2, name: 'HOC Demo', url: '/hoc-demo' },
    { id: 3, name: 'Unit Testing Demo', url: '/unit-testing' },
    { id: 4, name: 'Todo App (Hooks Demo)', url: '/hooks' },
    { id: 5, name: 'Products (Context API Demo)', url: '/context-api-demo' },
    { id: 6, name: 'Support (StyledComponents Demo)', url: '/styled-comp-demo' }
  ]

  return(
    <ul className="navbar-nav me-auto mb-2 mb-md-0">

      { routes.map( (route) => {
          return <MenuItem key={route.id} name={route.name} url={route.url}/>
        })
      }
    </ul>
  )
}

export default Menu;
