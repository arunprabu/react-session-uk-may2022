/*
  1. imports
  2. comp defn 
      * should return JSX 
      * JSX will look HTML. But not HTML 
  3. export
*/

import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import './App.css';
import Home from './Components/Home/Home';

// main comp / root comp / default comp 
// ideal place for your layout
// comp defn
function App() {
  // Returning JSX is mandatory
  return(
    <div>
      <Header />

      <div className='container mt-5 pt-3'>
        <Home />
      </div>

      <Footer/>
    </div>  
  )
}

export default App;
