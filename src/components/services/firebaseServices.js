import firebaseConfig from '../../firebase-config';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set,onValue,get,child } from "firebase/database";
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';
import { useEffect } from 'react';

const app = initializeApp(firebaseConfig)
const database = getDatabase(app);

const signInUser = async () =>{
 let provider = new GoogleAuthProvider()
 await signInWithPopup(getAuth(),provider)
};

const signOutUser = async () => {
  signOut(getAuth())
}
const initFirebaseAuth = () => {
  onAuthStateChanged(getAuth(),AuthStateObserver)
}



const AuthStateObserver =  (user) => {
  const userMenu = document.querySelector("#usermenu")
  const userSignIn = document.querySelector("#signincontainer")
  const portfolioButton = document.querySelector("#toportfolioxl")
  const loginPortfolio = document.querySelector("#loginportfoliobuttonxl")
  const userButton = document.querySelector("#userButton")
  const signInUser = document.querySelector("#textsignin")
  if (user) { // User is signed in!
    checkUserInDatabase(user.uid)
    console.log(user.uid)
    
    userSignIn.style.display = "none"
    userMenu.style.display = "block"
    signInUser.style.display = "none"
    userButton.style.display = "block"
    portfolioButton.style.display ="block"
    loginPortfolio.style.display = "none"
    return user.uid
  } else { // User is signed out!
    
    userSignIn.style.display = "block"
    userMenu.style.display = "none"
    signInUser.style.display = "block"
    userButton.style.display = "none"
    portfolioButton.style.display ="none"
    loginPortfolio.style.display = "block"
  }
}
const updateArrayOfFavouritesCoins = (array,userId) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    isInDataBase:true,
    arrayOfFavouritesCoins: array
  });
} 

const writeUserData = (userId) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    isInDataBase:true,
  });
}
const checkUserInDatabase = (userId) =>  {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return 
    } else {
    writeUserData(userId)
    }
  }).catch((error) => {
    console.error(error);
  });
}
const setFavouriteCoinInDB = (coin,userId) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}`)).then((snapshot) => {
  if (snapshot.exists()) {
    if(snapshot.val().arrayOfFavouritesCoins){
      let array = [...snapshot.val().arrayOfFavouritesCoins]
      array.concat(coin)
      updateArrayOfFavouritesCoins(array,userId)
    } else {
      let array = []
      array.concat(coin)
      updateArrayOfFavouritesCoins(array,userId)
    }
  } else {
  console.log("is not in database")
  writeUserData(userId)
  let array = []
  array.concat(coin)
  updateArrayOfFavouritesCoins(array,userId)
  }
}).catch((error) => {
  console.error(error);
});
}
export {signInUser,signOutUser,initFirebaseAuth,AuthStateObserver,setFavouriteCoinInDB}