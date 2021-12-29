import { HashRouter,Route,Routes } from "react-router-dom";
import Header from "./components/page/Header";
import Home from "./components/page/Home";
import Portfolio from "./components/page/Portfolio";
function App() {
  return (
    <div id="app">
    <HashRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>

    </HashRouter>
    </div>
  );
}

export default App;
