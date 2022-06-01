import React, { Component } from 'react'

class ErrorBoundary extends Component {

  state = {
    hasError: false
  }

  // to catch error
  static getDerivedStateFromError(error){
    console.log(error);
    return { hasError: true };
  }

  // only if any error occurs inside the child comp tree, this will be called
  componentDidCatch(error, errorInfo){
    // you can also the log the error to an error logging service like logRocket
    // side effects can be caught
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    console.log(this.props);
    if(this.state.hasError){
      // Let's return fallback UI
      return(
        <div className='alert alert-danger'>
          <p>Some error occured</p>
          <p>Try again after sometime. If the issue persists contact Admin</p>
        </div>
      )
    }else{
      return this.props.children;
    }
  }
}

export default ErrorBoundary