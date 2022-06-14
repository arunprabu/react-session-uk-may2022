/*
  reducer 
  ---
    * is a fn that will take two params (state, action)
    * must return state 
    * action is an obj -- will have two properties 
      * one property is type of action, another property is payload (optional)

*/

const cartReducer = (state = [], action) => {
  console.log('Inside reducerReducer');

  switch(action.type){
    case 'ADD_TO_CART':
      //return state;
      const cartItems = [...state, { ...action.payload}];
      return cartItems;
    
    default:
      return state;
  } 
}

export default cartReducer;

