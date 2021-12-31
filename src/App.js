import { HashRouter,Route,Routes } from "react-router-dom";
import Header from "./components/page/Header";
import Home from "./components/page/Home";
import Portfolio from "./components/page/Portfolio";
import Sidebar from "./components/page/Sidebar";
import { useState,useEffect } from "react";
import Coin from "./components/page/CoinPage";
import Footer from "./components/page/Footer";
import {getAPIStatus,getCoinList,getCoinMarkets,getTrendingCoins} from './components/services/CoinServices'
import Search from "./components/page/Search";
function App() {
  const [isSideBarDisplaying,setSideBarDisplay] = useState(false)
  const [isSearchDisplaying,setSearchDisplaying] = useState(false)
  const [apiStatus,setStatus] = useState(false)
  const [coinsList,setCoinList] = useState([])
  const [coinsMarket,setCoinMarket] = useState([])
  const [trendingCoins,setTrendingCoins] = useState([])

  const setSearch = () => {
    if(isSearchDisplaying === false){
      setSearchDisplaying(true)
    } else if (isSearchDisplaying){
      setSearchDisplaying(false)
    }
  }
  const setSideBar = () => {
      if(isSideBarDisplaying === false){
      setSideBarDisplay(true)
  } else if(isSideBarDisplaying){
      setSideBarDisplay(false)
      }
  }
  useEffect(() => {
    const app = document.querySelector("#app")
    const sidebar = document.querySelector("#sideBar")
    const search = document.querySelector("#search")
    if(isSideBarDisplaying){
      sidebar.style.display = "flex"
      app.childNodes[2].style.display = "none"
      app.childNodes[3].style.display = "none"
    }  else if(!(isSearchDisplaying) && !(isSideBarDisplaying)){
        sidebar.style.display = "none"
        app.childNodes[2].style.display = "block"
        app.childNodes[3].style.display = "block"
    }
    if(isSearchDisplaying){
      search.style.display = "block"
      app.childNodes[2].style.display = "none"
      app.childNodes[3].style.display = "none"

    } else if(!(isSearchDisplaying) && !(isSideBarDisplaying)){
      search.style.display = "none"
      app.childNodes[2].style.display = "block"
      app.childNodes[3].style.display = "block"
    }
  },[isSideBarDisplaying,isSearchDisplaying])
  useEffect(() => {
    (async() => {
      Promise.all([getTrendingCoins(),getCoinMarkets()]).then((data) => {
      setTrendingCoins(data[0])
      setCoinMarket(data[1])
        
      })
      let dataApiStatus = await getAPIStatus()
      let dataCoinList = await getCoinList()
      let dataCoinMarket = await getCoinMarkets()
      let dataTrendingCoins = await getTrendingCoins()
      setStatus(dataApiStatus)
      setCoinList(dataCoinList)
    })()
  },[])

  return (
    <div id="app">
    <HashRouter>
    <Search trendingCoins={trendingCoins} coins={coinsMarket} setSearch={setSearch}/>
    <Sidebar setSideBar={setSideBar}/>
    <Header setSearch={setSearch} setSideBar={setSideBar}/>
    <Routes>
      <Route path="/" element={<Home coins={coinsMarket}/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/coins/:id" element={<Coin coins={coinsMarket}/>}/>

    </Routes>
    <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
