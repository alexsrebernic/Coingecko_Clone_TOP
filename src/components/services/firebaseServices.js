import firebaseConfig from '../../firebase-config';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set,onValue,get,child } from "firebase/database";
import store from '../redux/store';
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from 'firebase/auth';

import {setUid,setArrayOfFavouriteCoins}  from '../redux/UserInfo';



const app = initializeApp(firebaseConfig)

// AUTH
const database = getDatabase(app);
const signInUser = async () =>{
 let provider = new GoogleAuthProvider()
 await signInWithPopup(getAuth(),provider)
};
const signOutUser = async () => {
  signOut(getAuth())
}
const initFirebaseAuth = () => {
  onAuthStateChanged(getAuth(),useAuthStateObserver)
}
const useAuthStateObserver =  (user) => {
  if (user) { // User is signed in!
    store.dispatch(setUid(user.uid))
    checkUserInDatabase(user.uid)
    getUserInfo(user.uid)
  } else { // User is signed out!
  }
}

//DATABASE
const updateArrayOfFavouritesCoins = (array,userUid) => {
  console.log("updating array with", array,userUid)
  const db = getDatabase();
  set(ref(db, 'users/' + userUid), {
    isInDataBase:true,
    arrayOfFavouritesCoins: array
  });
} 

const writeUserData = (userUid) => {
  const db = getDatabase();
  set(ref(db, 'users/' + userUid), {
    isInDataBase:true,
  });
}
const checkUserInDatabase = (userUid) =>  {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userUid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return 
    } else {
    writeUserData(userUid)
    }
  }).catch((error) => {
    console.error(error);
  });
}
const setFavouriteCoinInDB = (coin,userUid) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userUid}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val())
    if(snapshot.val().arrayOfFavouritesCoins){
      let array = [...snapshot.val().arrayOfFavouritesCoins]
      array.push(coin)
      updateArrayOfFavouritesCoins(array,userUid)
    } else {
      let array = []
      array.push(coin)
      updateArrayOfFavouritesCoins(array,userUid)
    }
  } else {
  writeUserData(userUid)
  let array = []
  array.concat(coin)
  updateArrayOfFavouritesCoins(array,userUid)
  }
}).catch((error) => {
  console.error(error);
});
}

const removeFavouriteCoinInDB = (coinId,userUid) => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userUid}`)).then((snapshot) => {
  if (snapshot.exists()) {
    let array = [...snapshot.val().arrayOfFavouritesCoins]
    let newArray = array.filter((coin) => {
      return coin !== coinId
    })
    updateArrayOfFavouritesCoins(newArray,userUid)
  } else {
    throw Error("Something go wrong with the page")
  }
}).catch((error) => {
  console.error(error);
});
}
const getUserInfo = (userUid) => {
  if(userUid === null) return 
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userUid}`)).then((snapshot) => {
  if (snapshot.exists()) {
    if(snapshot.val().arrayOfFavouritesCoins){
      store.dispatch(setArrayOfFavouriteCoins(snapshot.val().arrayOfFavouritesCoins))
    } else {
      return
    }
  } else {
    throw Error("Something go wrong with the page")
  }
}).catch((error) => {
  console.error(error);
});
}

export {signInUser,signOutUser,initFirebaseAuth,setFavouriteCoinInDB,removeFavouriteCoinInDB,getUserInfo}