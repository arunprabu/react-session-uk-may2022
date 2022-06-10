/*
  reducer 
  ---
    * is a fn that will take two params (state, action)
    * must return state 
    * action is an obj -- will have two properties 
      * one property is type of action, another property is payload (optional)

*/

const reducerReducer = (state = [], action) => {
  console.log('Inside reducerReducer');

  switch(action.type){
    case 'ADD_TO_CART':
      //return state;
      return [...state, { ...action.payload}];
    
    default:
      return state;
  } 
}

export default reducerReducer;

