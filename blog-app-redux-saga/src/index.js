import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 8: Let's work on to provide the store data to the whole app
import configureStore from './configureStore';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

const history = createBrowserHistory();

// getting store data with history
const store = configureStore(history);
console.log(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
