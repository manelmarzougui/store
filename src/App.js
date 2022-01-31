import logo from "./logo.svg";
import "./App.css";
import Boutiqueliste from "./components/Boutiqueliste";
import Addmodale from "./components/Addmodale";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Boutique from "./components/Boutique";
import Desc from "./components/Desc";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/Desc/:id" element={<Desc />} />
      </Routes>
    </div>
  );
  <div className="add">{<Addmodale />}</div>;
}

export default App;
