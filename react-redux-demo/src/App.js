import React from 'react';
import { Provider } from 'react-redux' 
import store from './redux/store'

import './App.css';

import HooksCakeContainer from './Components/HooksCakeContainer';
import HoooksIceCreamContainer from './Components/HooksIceCreamContainer'
import CAkeContainerwithInput from './Components/CAkeContainerwithInput';

import IceCreamContainerwithInput from './Components/IceCreamContainerwithInput';

function App() {
  return (
    <Provider store ={store} >
    <div className="App">
      
      <HooksCakeContainer />
      <HoooksIceCreamContainer />
      <CAkeContainerwithInput />
      <IceCreamContainerwithInput />
    </div>
    </Provider>
  );
}

export default App;
