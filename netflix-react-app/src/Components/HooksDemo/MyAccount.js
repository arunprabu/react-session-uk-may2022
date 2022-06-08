import React, { useState } from 'react'

const MyAccount = () => {

  console.log('Program Started'); 

  // we can get getter, setter,  
  const [ accountName, setAccountName  ] = useState('John');
   
  const handleChangeName = () => {
    console.log('Inside handleChangeName');
    setAccountName('Steve');
  }

  console.log('Before Return');

  return (
    <div>
      <h2>MyAccount | useState() Demo</h2>
      <p>Accout Name: {accountName}</p>

      <button onClick={handleChangeName}>Change Account Name</button>
    </div>
  )
}

export default MyAccount