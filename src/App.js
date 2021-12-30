import { HashRouter,Route,Routes } from "react-router-dom";
import Header from "./components/page/Header";
import Home from "./components/page/Home";
import Portfolio from "./components/page/Portfolio";
import Sidebar from "./components/page/Sidebar";
import { useState,useEffect } from "react";
function App() {
  const [isSideBarDisplaying,setSideBarDisplay] = useState(false)
  const setSideBar = () => {
      if(isSideBarDisplaying === false){
      setSideBarDisplay(true)
  } else if(isSideBarDisplaying === true){
      setSideBarDisplay(false)
      }
  }
  useEffect(() => {
      const sidebar = document.querySelector("#sideBar")
    if(isSideBarDisplaying){
      sidebar.style.display = "flex"
    }  else {
        sidebar.style.display = "none"
    }
  })
  return (
    <div id="app">
    <HashRouter>
    <Sidebar setSideBar={setSideBar}/>
    <Header setSideBar={setSideBar}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>

    </HashRouter>
    </div>
  );
}

export default App;
