import React, { Component } from 'react';
import './App.css';
import CounterPage from './counterPage';
import {connect} from 'react-redux';


import alert from './Reducers/alert.reducer';
import like from './Reducers/like.reducer';
import crush from './Reducers/crush.reducer';
import comment from './Reducers/commentaires.reducer';
import total from './Reducers/total.reducer';


import {Provider} from 'react-redux';

import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({alert, like, crush, comment, total}));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterPage/>
      </Provider>
    );
  }
}

export default App;
