import { HashRouter,Route,Routes } from "react-router-dom";
import Header from "./components/page/Header";
import Home from "./components/page/Home";
import Portfolio from "./components/page/Portfolio";
import Sidebar from "./components/page/Sidebar";
import { useState,useEffect } from "react";
import Coin from "./components/page/CoinPage";
import Footer from "./components/page/Footer";
import {getAPIStatus,getCoinList,getCoinMarkets,getTrendingCoins,getCategories,getExchanges} from './components/services/CoinServices'
import Search from "./components/page/Search";
import SignIn from "./components/page/SignIn";
import { initFirebaseAuth } from "./components/services/firebaseServices";
import Categories from "./components/page/Categories";
function App() {
  const [isSideBarDisplaying,setSideBarDisplay] = useState(false)
  const [isSearchDisplaying,setSearchDisplay] = useState(false)
  const [iSignInDisplaying,setSignInDisplay] = useState(false)
  const [apiStatus,setStatus] = useState(false)
  const [coinsList,setCoinList] = useState([])
  const [coinsMarket,setCoinMarket] = useState([])
  const [trendingCoins,setTrendingCoins] = useState([])
  const [categories,setCategories] = useState([])
  const [exchanges,setExchanges] = useState([])


  const setSearch = () => {
    if(isSearchDisplaying === false){
      setSearchDisplay(true)
    } else if (isSearchDisplaying){
      setSearchDisplay(false)
    }
  }
  const setSideBar = () => {
      if(isSideBarDisplaying === false){
      setSideBarDisplay(true)
  } else if(isSideBarDisplaying){
      setSideBarDisplay(false)
      }
  }
  const setSignIn = () => {
    if(iSignInDisplaying === false){
      setSignInDisplay(true)
    } else if(iSignInDisplaying){
      setSignInDisplay(false)
    }
  }
  useEffect(() => {
    const app = document.querySelector("#app")
    const sidebar = document.querySelector("#sideBar")
    const search = document.querySelector("#search")
    const login = document.querySelector("#signin")
    if(isSideBarDisplaying){
      sidebar.style.display = "flex"
      app.childNodes[3].style.display = "none"
      app.childNodes[4].style.display = "none"
    }  else if(!(isSearchDisplaying) && !(isSideBarDisplaying) && !(iSignInDisplaying)){
        sidebar.style.display = "none"
        app.childNodes[3].style.display = "block"
        app.childNodes[4].style.display = "block"
    }
    if(isSearchDisplaying){
      search.style.display = "block"
      app.childNodes[3].style.display = "none"
      app.childNodes[4].style.display = "none"

    } else if(!(isSearchDisplaying) && !(isSideBarDisplaying) && !(iSignInDisplaying)){
      search.style.display = "none"
      app.childNodes[3].style.display = "block"
      app.childNodes[4].style.display = "block"
    } 
    if(iSignInDisplaying){
      login.style.display = "block"
      app.childNodes[3].style.display = "none"
      app.childNodes[4].style.display = "none"
    } else if(!(isSearchDisplaying) && !(isSideBarDisplaying) && !(iSignInDisplaying)){
      login.style.display = "none"
      app.childNodes[3].style.display = "block"
      app.childNodes[4].style.display = "block"
    }
  },[isSideBarDisplaying,isSearchDisplaying,iSignInDisplaying])
  useEffect(() => {
    (async() => {
      Promise.all([getTrendingCoins(),getCoinMarkets(),getExchanges(),getCategories()]).then((data) => {
      setTrendingCoins(data[0])
      setCoinMarket(data[1])
      setExchanges(data[2])
      setCategories(data[3])
        
      })
    })()
  },[])
   initFirebaseAuth()
  return (
    <div id="app" >
    <HashRouter>
    <SignIn  setSignIn={setSignIn}/>
    <Search trendingCoins={trendingCoins} coins={coinsMarket} setSearch={setSearch}/>
    <Sidebar setSideBar={setSideBar}/>
    <Header trendingCoins={trendingCoins} coins={coinsMarket} setSignIn={setSignIn} setSearch={setSearch} setSideBar={setSideBar}/>
    <Routes>
      <Route path="/" element={<Home coins={coinsMarket}/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/categories" element={<Categories categories={categories}/>}/>
      <Route path="/coins/:id" element={<Coin coins={coinsMarket}/>}/>

    </Routes>
    <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
