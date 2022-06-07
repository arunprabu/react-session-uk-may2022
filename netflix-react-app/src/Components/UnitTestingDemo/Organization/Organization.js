import React from 'react'

const Organization = (props) => {

  return (
    <div className='text-center'>
      <h3>Welcome to our Organization's Official Page!</h3>
      <h5 data-testid="companyNameEl">{props.companyName}</h5>
      <p data-testid="employeeCountEl" 
      style={{ padding: '10px', color: 'green', textAlign: 'center'}}>Employees: 400000+</p>
      <a href="/" role='button' className='btn btn-primary btn-lg'>JOIN NOW</a>
      <br/><br/>
      <input type='text' placeholder='Enter Country Name'/>

      <p>Visit Cognizant Canada Website</p>
    </div>
  )
}

export default Organization