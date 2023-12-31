import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import HomePage from './components/HomePage'
import SellPage from './components/SellPage'
import ItemsDetail from "./components/ItemsDetail";
import Footer from "./components/Footer";
import MyCart from "./components/MyCart";
import ThankYouVisiting from "./components/ThankYou";

import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import './index.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './index.css'


// const [isLoaded, setIsLoaded] = useState(false);

// useEffect(() => {
//   dispatch(thunk here).then(() => setIsLoaded(true));
// }, [dispatch]);

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <div id = 'content-wrap'>
      <Navigation isLoaded={isLoaded} />


      {isLoaded && (

        <Switch>

          <Route exact path ='/thankyou'>
          <ThankYouVisiting/>
          </Route>
          
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>

          <Route exact path = '/sell'>
            <SellPage/>
          </Route>

          <Route exact path="/signup">
            <SignupFormPage />
          </Route>

          <Route  exact path ='/items/:itemId'>
          <ItemsDetail/>
          </Route>

          <Route exact path = '/myCart'>
          <MyCart/>
          </Route>

          <Route path = '/'>
            <HomePage/>
          </Route>

        </Switch>

      )}
       </div>
      <Footer/>
    </>
  );
}

export default App;
