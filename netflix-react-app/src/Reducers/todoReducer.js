/*
  reducer 
  ---
    * is a fn that will take two params (state, action)
    * must return state 
    * action is an obj -- will have two properties 
      * one property is type of action, another property is payload (optional)

*/

const todoReducer = (state = [], action) => {
  console.log('Inside todoReducer');

  switch(action.type){
    case 'ADD_TODO':
      return [...state, {id: new Date(), title: action.payload}];
    
    default:
      return state;
  } 
}

export default todoReducer;

