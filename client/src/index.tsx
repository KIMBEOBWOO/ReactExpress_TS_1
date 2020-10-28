import React from 'react';
import ReactDOM from 'react-dom';
import {Login,Signup,Home} from './pages';
import {Main,Header} from './components';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AfreecaAPI from './pages/AfreecaAPI';

ReactDOM.render(
  <BrowserRouter>
      <Route exact path='/' component={AfreecaAPI}></Route>
      <Route path='/signup' component={Signup}></Route>  
      <Route exact path='/apitest' component={AfreecaAPI}></Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
