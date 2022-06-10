/*
  1. imports
  2. comp defn 
      * should return JSX 
      * JSX will look HTML. But not HTML 
  3. export
*/

import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer/Footer';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import {appRoutes} from './Routes/appRoutes';
import { CartContext } from './Contexts/CartContext';
import { useReducer, useState } from 'react';
import reducerReducer from './Reducers/cartReducer';

// main comp / root comp / default comp 
// ideal place for your layout
// comp defn
function App() {

  // const [cartState, cartDispatch] = useReducer(reducerReducer);
  // console.log(cartState);

  // Returning JSX is mandatory
  return(
    <CartContext.Provider value={{}}>
      <BrowserRouter>
        <Header />

        <div className='container mt-5 pt-3'>
          {/* Config the routes */}
          { appRoutes }
        </div>

        <Footer/>
      </BrowserRouter> 
    </CartContext.Provider>
  )
}

export default App;
