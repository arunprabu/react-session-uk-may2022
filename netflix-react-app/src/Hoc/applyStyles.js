// HOC 
// to share common functionality b/w components

// should take in one comp as input and return one comp as output 

import React from "react";

const applyStyles = (OriginalComponent) => {
  
  // Let's return a new component 
  return ( (props) => {
    console.log(props);
    // inside our new comp let's return JSX
    return( 
      <div className="hocStyle">
        <OriginalComponent {...props}/>
      </div>
    )
  });
}

export default applyStyles;