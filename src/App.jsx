import { Route,Routes,BrowserRouter } from "react-router-dom";
import React, { lazy } from "react";

import Layouts from "./layouts";
import PageRouter from "./router.js";
import "./App.css";

import Home  from "./pages/Home.jsx"

import Second from "./pages/Second.jsx";
import Third  from "./pages/Third.jsx";
import Forth  from "./pages/Forth.jsx";
import Fifth  from "./pages/Fifth.jsx";

function App() {
  return (
    <Layouts>
      <BrowserRouter>
       <Routes>
            <Route exact path="/" Component={Home}/>
            <Route path="/second" Component={Second}/>
            <Route path="/third" Component={Third}/>
            <Route path="/forth" Component={Forth}/>
            <Route path="/fifth" Component={Fifth}/>
        </Routes>
        </BrowserRouter>
    </Layouts>
  );
}

export default App;
