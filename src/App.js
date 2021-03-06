import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Header from './Header';
import Home from "./Home"
import Checkout from "./Checkout";
import Login from "./Login";
// import { Unsubscribe } from '@material-ui/icons';




function App() {
  // const [{basket} , dispatch] = useStateValue();

  // // Piecee of code which runs based on a given condition


  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     if (authUser){
  //       // User is Logged in
  //       dispatch({
  //         type:"SET_USER",
  //         user:authUser
  //       })
  //     }else{
  //       // User is logged out
  //       dispatch({
  //         type:"SET_USER",
  //         user:null

  //       });
  //     }
  //   });

  //   return() =>{
  //     //Any clean up operation
  //     unsubscribe();


  //   }
  // }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
     
    </div>
    </Router>
    
  );
}

export default App;
