import React from 'react';
import { Provider } from 'react-redux' 
import store from './redux/store'

import './App.css';
import CakeContainer from './Components/Cakecontainer';
import HooksCakeContainer from './Components/HooksCakeContainer';

function App() {
  return (
    <Provider store ={store} >
    <div className="App">
      <CakeContainer />
      <HooksCakeContainer />
    </div>
    </Provider>
  );
}

export default App;
