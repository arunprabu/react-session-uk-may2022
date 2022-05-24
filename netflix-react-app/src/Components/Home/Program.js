import React from 'react'

const Program = (props) => { // receiving data from parent comp

  console.log(props); 
  /* Props are Objects 
    * props used for receiving data from parent comp
    * props can receive children
    * props are read-only
  */

  return (
    <div className="card text-start mb-3">
      <div className="card-header">
        Featured Programs
        <span 
        className="badge text-bg-warning text-dark float-end">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {props.children}
        </p>
        <button type="button" className="btn btn-primary">
          Watch now
        </button>
      </div>
      <div 
        className="card-footer text-muted">
          {props.time}
      </div>
    </div>
  )
}

export default Program;