import "./App.css";
import { Route, Routes } from "react-router-dom";
import Stocks from "./components/Stocks";
import About from "./components/About";
import Price from "./components/Price";
import Nav from "./components/Nav";
import Home from './components/Home';

export default function App () {
  return (
    <div className="App">
      <Nav />
    <Routes>
    <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/stocks" element={<Stocks/>}/>
      <Route path="/price/:symbol" element={<Price />} />
    </Routes>
    </div>
  );
}