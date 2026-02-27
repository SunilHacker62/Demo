import React from "react";
import "./App.css";
// import { Counter } from "./Counter";
// import Apicall from "./Apicall";
// import { Parent } from "./Parent";
// import { Timer } from "./Timer";
// import Interview from "./Interview";
// import EventDelegation from "./EventDelegation";
// import Search from "./Search";
// import List from "./List";
// import Propagation from "./Propagation";
// import ApiCalls from "./ApiCalls";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Search1 from "./Search1";

function App() {
  return (
    <div className="App">
      <Search1 />


      {/* <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>|
        <Link to ="/about">About</Link>
      </nav>
        <Routes>
          <Route path = "/" element ={<Home/>}  />
          <Route path = "/about" element ={<About/>}  />
        </Routes>
      </BrowserRouter> */}
      {/* <Search />
      <ApiCalls />
      <Propagation />
      <Counter />
      <Apicall />
      <Parent />
      <Timer />
      <Interview />
      <EventDelegation />
      <List /> */}
    </div>
  );
}

export default App;
