import React,{useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
// import  {auth} from "./firebase";

function Login() {
     // const history = useHistory();

     // const [email , setEmail] = useState("");
     // const [password , setPassword] = useState("");


     // const login = event => {
     //      event.preventDefault(); // This Stop the refresh
     //      //do the Login logic...
     //      auth
     //        .signInWithEmailAndPassword(email,password)
     //        .then((auth) => {
     //            history.push("/");
     //        })
     //        .catch((e) => alert(e.message));

     // }



     // const register = event => {
     //      event.preventDefault(); // This Stop the refresh
     //      // do the register logic...
     //      auth
     //      .createUserWithEmailAndPassword(email, password)
     //      .then (auth => {
     //          //created a user and logged in redirect to homepage...
     //          history.push("/");
     //      })
     //      .catch((e) => alert(e.message));
     
     
     // }
     return (
          <div className="login">
               <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
            </Link>
            <div className=  "login__container">
                 <h1>Sign in</h1>
                 <form>
                 <h5>E-mail</h5>
                 <input value = ""type="email"/>
                 <h5>password</h5>
                 <input value = ""  type="password"/>
                 <button type="submit" className="login__signInButton">Sign In</button>

                 </form>
                 <p>
                 By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                 </p>

                 <button className="login__registerButton">
                      Create Your Amazon
                 </button>
                 
            </div>
              
          </div>
     )
}

export default Login
