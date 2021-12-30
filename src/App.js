import { HashRouter,Route,Routes } from "react-router-dom";
import Header from "./components/page/Header";
import Home from "./components/page/Home";
import Portfolio from "./components/page/Portfolio";
import Sidebar from "./components/page/Sidebar";
import { useState,useEffect } from "react";
import Footer from "./components/page/Footer";
import {getAPIStatus,getCoinList,getCoinMarkets} from './components/services/CoinServices'
function App() {
  const [isSideBarDisplaying,setSideBarDisplay] = useState(false)
  const [apiStatus,setStatus] = useState(false)
  const [coinsList,setCoinList] = useState([])
  const [coinsMarket,setCoinMarket] = useState([])

  const setSideBar = () => {
      if(isSideBarDisplaying === false){
      setSideBarDisplay(true)
  } else if(isSideBarDisplaying === true){
      setSideBarDisplay(false)
      }
  }
  useEffect(() => {
    const app = document.querySelector("#app")
    const sidebar = document.querySelector("#sideBar")
    if(isSideBarDisplaying){
      sidebar.style.display = "flex"
      app.childNodes[1].style.display = "none"
      app.childNodes[2].style.display = "none"
    }  else {
        sidebar.style.display = "none"
        app.childNodes[1].style.display = "block"
        app.childNodes[2].style.display = "block"
    }
  })
  useEffect(() => {
    (async() => {
      let dataApiStatus = await getAPIStatus()
      let dataCoinList = await getCoinList()
      let dataCoinMarket = await getCoinMarkets()
      setStatus(dataApiStatus)
      setCoinList(dataCoinList)
      setCoinMarket(dataCoinMarket)
    })()
  },[])
  console.log(coinsMarket)

  return (
    <div id="app">
    <HashRouter>
    <Sidebar setSideBar={setSideBar}/>
    <Header setSideBar={setSideBar}/>
    <Routes>
      <Route path="/" element={<Home coins={coinsMarket}/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/coins/:id" />

    </Routes>
    <Footer/>
    </HashRouter>
    </div>
  );
}

export default App;
