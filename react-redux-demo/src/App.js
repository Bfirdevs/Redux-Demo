import React from 'react';
import { Provider } from 'react-redux' 
import store from './redux/store'

import './App.css';

import HooksCakeContainer from './Components/HooksCakeContainer';
import HoooksIceCreamContainer from './Components/HooksIceCreamContainer'

function App() {
  return (
    <Provider store ={store} >
    <div className="App">
      <HooksCakeContainer />
      <HoooksIceCreamContainer />
    </div>
    </Provider>
  );
}

export default App;
