// Util Function. not custom hook. 

export const fetchAPI = (apiURL) => {
  console.log(apiURL);

  // What's the HTTP Method? GET 
  // What's the REST API client? fetch, axios

  return fetch(apiURL)
    .then( ( res) => { // successful res 
      console.log(res);

      if(res.status === 200){
        return res.json(); // return response - it is also promise 
      }else{
        throw new Error('Invalid Response');
      }
    })
    .catch( (err) => { // error as res 
      console.log(err);
    });
}
