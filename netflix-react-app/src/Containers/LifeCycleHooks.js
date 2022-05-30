import React, { Component } from 'react'

class LifeCycleHooks extends Component {

  constructor() {
    // if a class comp has constructor -- super method should be called
    // only if you call super() -- 'this' keyword will be available within this comp
    // constructor will be the first one called inside this comp
    super();
    console.log('============= 1. Inside constructor ');

    // ideal place for you to have state -- atleast empty state
    this.state = {
      isLoading: true,
      isError: false,
      featureName: ''
    }

    this.myTimeout = null;
  }

  // lifecycle hook 
  componentDidMount() {
    // this method will be called ONLY ONCE after the initial rendering
    // upon successful rendering of the JSX -- componentDidMount will be called
    // whenever the comp is coming into view -- componentDidMount will be called
    console.log('============= 3. Inside componentDidMount ');
    // ideal place for you to make ajax calls 
    // upon successful/failure ajax call you can change state here
    // mocking ajax call w/ timeout 
    this.myTimeout = setTimeout(() => {
      // assuming that we get the data in 4 sec from rest api back end 
      console.log('Inside setTimeout');
      // you need to update state here only if prev state and new state are different
      this.setState({
        isLoading: false,
        // isError: true, // make it true if failure/error in ajax call
        featureName: 'Lifecycle Hooks Intro'
      });

    }, 4000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // when state is updated this method will be called 
    // it has to return true or false mandatorily.
    // compare the prev state(this.state) and new state (nextState)
    // if changes are there, then return true otherewise false
    console.log(this.state);
    console.log(nextState);

    console.log('============= 4. Inside shouldComponentUpdate ');
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // called immediately after the UPDATE in JSX
    // NOT called after initial rendering
    // Use this as an opportunity to operate on the DOM when the component has been updated.
    // document.getElementById('success').innerText = this.state.featureName;
    // Typical usage (don't forget to compare props):
    console.log(prevState);
    console.log('============= 6. Inside componentDidUpdate');
  }

  componentWillUnmount() {
    // whenever the comp is going out of the view -- componentWillUnmount will be called
    // ideal place for you to clear intervals/ timeouts
    clearTimeout(this.myTimeout);
    console.log('============= 7. Inside componentWillUnmount ');
  }

  render() {
    // Render method will be called automatically
    // for render to be called, this comp should extend React Component
    console.log('============= 2 & 5 Inside Render ');

    // handling loading state
    if (this.state.isLoading) {
      return (<div className='spinner-border text-primary'></div>)
    }

    // handling error state
    if (this.state.isError) {
      return (
        <div className='alert alert-danger'>
          Some error occured! try again later.
        </div>
      )
    }

    // handling success state
    return (
      <div>
        <h3>{this.state.featureName}</h3>

        <div>
          <h4>Learn about Lifecycle Hooks here</h4>
          <a href='https://reactjs.org/docs/react-component.html'>Read more about Lifecycle Hooks</a>
        </div>
      </div>
    )
  }
}

export default LifeCycleHooks;