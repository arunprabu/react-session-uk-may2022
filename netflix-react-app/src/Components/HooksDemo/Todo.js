import React, { useReducer, useRef } from 'react'
import todoReducer from '../../Reducers/todoReducer';

const Todo = () => {
  // creating ref for input field to capture data in a fn comp 
  const todoInput = useRef('');

  // useReducer will get a reducer as input and will return an array
  // with state and dispatcher fn 
  // let's create reducer fn to pass inside useReducer() hook
  const [todoState, todoDispatch] = useReducer(todoReducer);
  console.log(todoState);
  console.log(todoDispatch);

  const handleAddTodo = () => {
    console.log(todoInput.current.value);
  }

  return (
    <div className='row'>
      <h2>Todo | useRef() and useReducer() Demo</h2>

      <div className='col-md-6 offset-md-3'>
        <div className="col-auto">
          <input type='text' className='form-control'
          placeholder='Enter Todo' ref={todoInput}/>
        </div>
        <div className="col-auto">
          <button className='btn btn-primary btn-sm' 
            onClick={handleAddTodo}>ADD TODO</button>
        </div>
        
        <ul className='list-group'>
          <li className='list-group-item'>todo 1</li>
          <li className='list-group-item'>todo 2</li>
        </ul>
      </div>
    </div>
  )
}

export default Todo;