import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
import { initializeApp } from 'firebase/app';

import Nav from './Nav';
import Footer from './Footer';
import Pages from './Pages';
import LoggedOutPage from './LoggedOutPage';


const firebaseConfig = {
  apiKey: "AIzaSyAOLm31cSxoeLf7xWGKGeIFS8b0EZ51tlc",
  authDomain: "screen-butler.firebaseapp.com",
  projectId: "screen-butler",
  storageBucket: "screen-butler.appspot.com",
  messagingSenderId: "856116268976",
  appId: "1:856116268976:web:1380b431e02dd2e7c95075"
};


function AuthWrapper() {

  initializeApp(firebaseConfig);    // starts up firebase app
  const auth = getAuth();           // invokes firebase auth package
  const db = getFirestore();      // invokes firebase firestore

  const [isLoggedIn, setIsLoggedIn] = useState(false)   // changes state depending on logged in status 
  const [loginAuthError, setLoginAuthError] = useState('')
  const [signupAuthError, setSignupAuthError] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [currUser, setCurrUser] = useState('');

  // uses firebase login to authenticate user -> this is passed as prop to Login component
  const loginUser = (email, password) => {
    const loginModal = document.getElementById('login-modal');
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userData) => {
        setIsLoggedIn(true);
        
        // get current user detail document from database based on unique id created on signup
        const docRef = doc(db, "users", userData.user.uid);
        const docSnap = await getDoc(docRef);
        const userObject = docSnap.data();
        setCurrUser(userObject);
        loginModal.className = 'hidden';
      })
      .catch(error => {
        let errorString = error.message;
        let subString = errorString.substring(errorString.indexOf('/') + 1, errorString.indexOf(')'));
        let errorMessage = subString.replace('-', (' '))
        setLoginAuthError(`Oops... ${errorMessage}!`)
      });
  }   

  // uses firebase login to signup user -> this is passed as prop to Signup component
  const signupUser = (name, email, password) => 
  {
    createUserWithEmailAndPassword(auth, email, password).then
      (async (userData) => {
        await setDoc(doc(db, "users", userData.user.uid), {
          name : name, 
          email : email, 
          password : password,
          id: userData.user.uid
        }).then(setModalOpen(false))  
      }).catch(error => {
        let errorString = error.message;
        let subString = errorString.substring(errorString.indexOf('/') + 1, errorString.indexOf(')'));
        let errorMessage = subString.replace('-', (' '))
        setSignupAuthError(`Oops... ${errorMessage}!`)
      })
  }

  // uses firebase login to signout user -> this is passed as prop to NavLoggedIn component
  const signoutUser = () => {
    signOut(auth).then(() => {
      setIsLoggedIn(false)
    }).catch((error) => {
      console.log(`Error while signing out`)
    });
  }

  const clearAuthError = (form) => {
    form === 'login' ? setLoginAuthError(` `) : setSignupAuthError(` `)
  }


  return (
    <div className="App">
      <Router>
        <Nav loggedIn={isLoggedIn} 
             loginUser={loginUser} 
             loginAuthError={loginAuthError}
             signupAuthError={signupAuthError}
             clearAuthError={clearAuthError}
             signupUser={signupUser} 
             modalOpen={modalOpen}
             signoutUser={signoutUser}
             currUser={currUser}/>
        { isLoggedIn ? <Pages currUser={currUser} /> : <LoggedOutPage /> }     
        <Footer />
      </Router>
    </div>
  );
}

export default AuthWrapper;
