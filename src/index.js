import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.css'
import store from './components/redux/store';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

