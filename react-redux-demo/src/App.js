import React from 'react';
import { Provider } from 'react-redux' 
import store from './redux/store'

import './App.css';

//import HooksCakeContainer from './Components/HooksCakeContainer';
//import HoooksIceCreamContainer from './Components/HooksIceCreamContainer'
//import CAkeContainerwithInput from './Components/CAkeContainerwithInput';
//import ItemContainer from './Components/itemcontainer' 
//import IceCreamContainerwithInput from './Components/IceCreamContainerwithInput';
import UserContainer from './Components/UserContainer';

function App() {
  return (
    <Provider store ={store} >
    <div className="App">
      <UserContainer/>
     {/*  <ItemContainer cake/>
      <ItemContainer/>
      <HooksCakeContainer />
      <HoooksIceCreamContainer />
      <CAkeContainerwithInput />
     <IceCreamContainerwithInput /> */}
    </div>
    </Provider>
  );
}

export default App;
