/*
  1. imports
  2. comp defn 
      * should return JSX 
      * JSX will look HTML. But not HTML 
  3. export
*/

import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

// main comp / root comp / default comp 
// ideal place for your layout
// comp defn
function App() {
  // Returning JSX is mandatory
  return(
    <div>
      <Header />
      <h1>Success!</h1>
      <Footer/>
    </div>  
  )
}

export default App;
