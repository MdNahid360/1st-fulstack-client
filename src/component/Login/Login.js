import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css'
 import google from '../../img/icons/Group 573.png';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                const {displayName, email, photoURL} = res.user;
                const signedInUser = {username: displayName, email, photo: photoURL};
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => console.log(error.message));
    };
    return (
        <div className="container text-center py-5">
              <form className="form-box">
               <h5 className="text-left pb-3">Create an account</h5>
               <input type="text" name="name"  required className="form-control mt-3 " placeholder="Name" id=""/>
               <input type="email" name="username"  required className="form-control mt-3 " placeholder="Username or Email" id=""/>
               <input type="password" name="password"  required className="form-control mt-3 " placeholder="Password" id=""/>
               <input type="password" name="password"  required className="form-control mt-3 " placeholder="Confarm Password" id=""/>
               <input type="submit"  required className="btn btn-primary w-100 mt-3" placeholder="Name" id=""/>
           </form>
           <br/>
           <h5 className="or">or</h5><br/>
            <button className='btn google'  onClick={handleGoogleSignIn}><img src={google} className="img-fluid glg" alt=""/>  Login with Google</button>
        </div>
    );
};

export default Login;