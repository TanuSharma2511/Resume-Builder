// import React, { Component } from "react";
// import "./App.css";
// import Personal from "./components/Personal";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Experience from "./components/Experience";
// import Education from "./components/Education";
// import Miscelleneous from "./components/Miscelleneous";
// import UserForm from "./components/UserForm";
// import StartPage from "./components/StartPage";

// class App extends Component {

//   render() {
//     return (
//       <div class="overall">
//          <UserForm/>
//       </div>  
//     );
//   }
// }

// export default App;

import React,{Component} from 'react';
import { BrowserRouter as Router,Route ,Switch} from "react-router-dom";  
import { setCurrentUser, logoutUser} from "./actions/authAction";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import './App.css';

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Personal from "./components/Personal";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Miscelleneous from "./components/Miscelleneous";
import UserForm from "./components/UserForm";
import StartPage from "./components/StartPage";
import Front from "./components/Front";
import PrivateRoute from "./components/common/privateRoute";

// Redux
import { Provider } from 'react-redux';
import store from './store';

//Check for token
if(localStorage.jwtToken){
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);

  //Set User and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired Token
  const currentTime = Date.now()/1000;
  if(decoded.exp < currentTime){
    //Logout User
    store.dispatch(logoutUser());
    //Redirect to Login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      
      <div className="App">
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Front} />
      <Switch>
       <PrivateRoute exact path="/dashboard" component={UserForm} /> 
      </Switch>
      </div>
    </Router>
    </Provider>
    )
  }
}
export default App;


