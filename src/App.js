import { Route,Routes,  useLocation,useNavigate,useParams} from "react-router-dom";
import Header from "./components/page/Header";
import Home from "./components/page/Home";
import Portfolio from "./components/page/Portfolio";
import Sidebar from "./components/page/Sidebar";
import { useState,useEffect } from "react";
import Coin from "./components/page/CoinPage";
import Footer from "./components/page/Footer";
import {getCoinMarkets,getTrendingCoins,getCategories} from './components/services/CoinServices'
import Search from "./components/page/Search";
import SignIn from "./components/page/SignIn";
import { initFirebaseAuth } from "./components/services/firebaseServices";
import Categories from "./components/page/Categories";
export  function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}
function App() {
  const [isSideBarDisplaying,setSideBarDisplay] = useState(false)
  const [isSearchDisplaying,setSearchDisplay] = useState(false)
  const [iSignInDisplaying,setSignInDisplay] = useState(false)
  const [coinsMarket,setCoinMarket] = useState([])
  const [trendingCoins,setTrendingCoins] = useState([])
  const [categories,setCategories] = useState([])


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
      Promise.all([getTrendingCoins(),getCoinMarkets(),getCategories()]).then((data) => {
      setTrendingCoins(data[0])
      setCoinMarket(data[1])
      setCategories(data[2])
      })
    })()
    return (() => {
      setTrendingCoins([])
      setCoinMarket([])
      setCategories([])
    })
  },[])
   initFirebaseAuth()
  return (
    <div id="app" >
    <SignIn  setSignIn={setSignIn}/>
    <Search trendingCoins={trendingCoins} coins={coinsMarket} setSearch={setSearch}/>
    <Sidebar setSideBar={setSideBar}/>
    <Header trendingCoins={trendingCoins} coins={coinsMarket} setSignIn={setSignIn} setSearch={setSearch} setSideBar={setSideBar}/>
    <Routes>
    
      <Route path="/" element={<Home coins={coinsMarket}/>}/>
      <Route path="/portfolio" element={<Portfolio coins={coinsMarket} />}/>
      <Route path="/categories" element={<Categories categories={categories}/>}/>
      <Route path="/coins/:id" element={<Coin coins={coinsMarket}/>}/>

    </Routes>
    <Footer/>
    </div>
  );
}

export default withRouter(App);
