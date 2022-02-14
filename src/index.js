import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App/';
import './index.css'
import {createStore} from 'redux'
import allReducers from './redux/reducers'
import {Provider} from 'react-redux'

let store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

