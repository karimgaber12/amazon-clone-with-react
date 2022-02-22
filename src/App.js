/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Orders from './components/Orders';
import {Routes,Route} from "react-router-dom";
import Login from './components/Login';
import { auth } from './components/firebase';
import { useStateValue } from './StateProvider';
import Payment from './components/Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51KTPOyL80v5o2cmovvoCs99BAiznnIlBNmS04zyumtFQ9XwYltr1s6NPlkMBKSESF30httXz5dVULGcyzTjV0O7l00hOv9vtLA")

function App() {
  // when the component load do what inside in use effect
  const [{user},dispatch] = useStateValue()
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      if (authUser) {
        // the user logged in
        
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  return (
    <div className="App">
      <Header/>
    <Routes>
    <Route path='/orders' element={<Orders/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/checkout" element={<Checkout/>} />
        <Route path='/payment' element={ 
          <Elements stripe={promise}>
            <Payment/>
          </Elements>
        }/>
    </Routes>
    </div>
  );
}

export default App;
