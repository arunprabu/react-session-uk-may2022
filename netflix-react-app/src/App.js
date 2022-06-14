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
import { useReducer } from 'react';
import cartReducer from './Reducers/cartReducer';

// main comp / root comp / default comp 
// ideal place for your layout
// comp defn
function App() {

  const [_cartState, _cartDispatch] = useReducer(cartReducer);
  console.log(_cartState);

  const cartData = {
    cartState: _cartState,
    cartDispatch: _cartDispatch
  }

  console.log('Before Return');

  // Returning JSX is mandatory
  return(
    <CartContext.Provider value={cartData}>
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
