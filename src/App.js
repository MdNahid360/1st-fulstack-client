import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';



function App() {
  return (
    <div className="App">
                <Router>
      <div>
      
          <nav className="navbar navbar-light navbar-expand-lg sticky-top">
                <div className="container">
                      <a href="#" className="navbar-brand font-weight-bold">Fresh Valley</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/order">Order</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/admin">Admin</Link>
                      </li>
                      </ul>
                      </div>
                </div>
          </nav>

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/home">
            <Home />
          </Route>
          <Route path="/order">
          
          </Route>
          <Route path="/admin">
 
           </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
