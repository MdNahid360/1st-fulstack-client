import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import AddProducts from './component/AddProducts/AddProducts';
import Login from './component/Login/Login';
import Checkout from './component/Checkout/Checkout';
import { createContext, useState } from 'react';
import PrivetRoute from './component/PrivetRoute.js/PrivetRoute';
 

export const UserContext = createContext();


function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div className="App">
              <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
             
             <Router>
             <nav className="navbar navbar-light navbar-expand-lg sticky-top">
        <div className="container">
              <a href="#" className="navbar-brand font-weight-bold">Fresh Valley</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/order">Order</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/addProduct">Admin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/Deals">Deals</Link>
              </li>
             
              <li className="nav-item">
                <img src={loggedInUser.photo}  className="img-fluid logo"/>
              </li>

              </ul>
              </div>
        </div>
  </nav>
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/logo">
            <Home />
          </Route>
          <PrivetRoute  path="/checkout">
           <Checkout />
           </PrivetRoute>
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/login">
             <Login></Login>
          </Route>
          <PrivetRoute path="/addProduct">
                  <AddProducts />
            </PrivetRoute>
        </Switch>

    </Router>
      </UserContext.Provider>

    </div>
  );
}

export default App;
