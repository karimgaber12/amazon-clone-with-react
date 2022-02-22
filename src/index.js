import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reducer,{ initialState } from './reducer';
import {StateProvider} from './StateProvider'
const rootElement = document.getElementById("root");
render(
  <StateProvider initialState={initialState} reducer={reducer}>  {/*reducer => what make in data// initialState=> data before change or edit*/}
    <BrowserRouter>
      <App />
    </BrowserRouter>
     </StateProvider>
  , rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
