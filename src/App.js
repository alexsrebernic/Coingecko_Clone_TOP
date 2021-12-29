import { HashRouter,Route,Routes } from "react-router-dom";
import Header from "./components/page/Header";
import Home from "./components/page/Home";
import Nav from "./components/page/Nav";
function App() {
  return (
    <div id="app">
    <HashRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    </HashRouter>
    </div>
  );
}

export default App;
