// Functional Component with Anonymous Function 

import React from 'react';
import Menu from '../Menu';

const Footer = function(){

  const copyrightYear = 2022;

  return(
    <footer className="text-center">
      <hr/>
      <Menu />
      <p>Copyright 
        <span data-testid="copyrightEl">{ copyrightYear }</span> 
      | Arun</p>
    </footer>
  )
  
}

export default Footer;