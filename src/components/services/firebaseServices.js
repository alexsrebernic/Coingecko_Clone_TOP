import firebaseConfig from '../../firebase-config';
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
initializeApp(firebaseConfig)
const signInUser = async () =>{
 let provider = new GoogleAuthProvider()
 await signInWithPopup(getAuth(),provider)
};

const signOutUser = async () => {
  signOut(getAuth())
}
const initFirebaseAuth = () => {
  onAuthStateChanged(getAuth(),authStateObserver)
}



function authStateObserver(user) {
  const userMenu = document.querySelector("#usermenu")
  const userSignIn = document.querySelector("#signincontainer")
  const portfolioButton = document.querySelector("#portfolioHeaderButton")
  if (user) { // User is signed in!
    userSignIn.style.display = "none"
    userMenu.style.display = "block"
    return user
  } else { // User is signed out!
    userSignIn.style.display = "block"
    userMenu.style.display = "none"
  }
}
export {signInUser,signOutUser,initFirebaseAuth,authStateObserver}