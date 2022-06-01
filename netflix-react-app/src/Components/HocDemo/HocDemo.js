import React from 'react'
import LastLogin from '../../Hoc/LastLogin';
import applyStyles from '../../Hoc/applyStyles';
import Hello from './Hello';
import Bye from './Bye';
import Calculator from './Calculator';
import ErrorBoundary from '../../Containers/ErrorBoundary';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemo = () => {
  return (
    <div>
      <h1>Higher Order Component</h1>
      {/* We will not use HOC like the following */}
      <LastLogin>
        <h2>Last login: </h2>
        <p>Yesterday</p>
      </LastLogin>
      
      <StyledHello name="Arun"/>
      <br />
      <StyledBye name="Arun"/>

      <ErrorBoundary>
        <Calculator feature="add"></Calculator>
      </ErrorBoundary>

    </div>
  )
}

export default HocDemo