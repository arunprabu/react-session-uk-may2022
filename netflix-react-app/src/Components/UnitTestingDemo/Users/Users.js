import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../../../Utils/fetchAPI';

const Users = () => {

  // we need to hit rest api on load - useEffect() 
  // What's the REST API endpoint? https://jsonplaceholder.typicode.com/users?_limit=5

  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // let's hit the rest api
    fetchAPI('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then((data) => {
        console.log(data);
        setUserList(data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });

  }, []);

  let myUsers = null;
  if (userList && userList.length > 0) {
    myUsers = userList.map((user) => {
      return (
        <div className='card' key={user.id}>
          <div className='card-body'>
            <h3>{user.name}</h3>
            <p>Email: {user.email} | Phone: {user.phone}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div>
      <h2>Users | REST API and Mocking API</h2>

      {
        error ?
          <div className='alert alert-danger'>
            Sorry! unable to load users. Try again later.
          </div>
          :
          myUsers
      }
    </div>
  )
}

export default Users