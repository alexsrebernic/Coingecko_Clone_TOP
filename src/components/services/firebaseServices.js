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
  const portfolioButton = document.querySelector("#toportfolioxl")
  const loginPortfolio = document.querySelector("#loginportfoliobuttonxl")
  const userButton = document.querySelector("#userButton")
  const signInUser = document.querySelector("#textsignin")
  if (user) { // User is signed in!
    console.log(user)
    userSignIn.style.display = "none"
    userMenu.style.display = "block"
    signInUser.style.display = "none"
    userButton.style.display = "block"
    portfolioButton.style.display ="block"
    loginPortfolio.style.display = "none"
  } else { // User is signed out!
    userSignIn.style.display = "block"
    userMenu.style.display = "none"
    signInUser.style.display = "block"
    userButton.style.display = "none"
    portfolioButton.style.display ="none"
    loginPortfolio.style.display = "block"
  }
}
export {signInUser,signOutUser,initFirebaseAuth,authStateObserver}