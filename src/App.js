import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import NavBar from "./component/navbar";
import Home from "./component/home";
import TravelForm from "./component/travelform";
import Login from "./component/login";
import Sineup from "./component/Sineup";
import Luxor from "./component/Luxor";
import NewYork from "./component/NewYork";
import Greece from "./component/Greece";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="travelform" element={<TravelForm />} />
        <Route path="Login" element={<Login />} />
        <Route path="Sineup" element={<Sineup />} />
        <Route path="Luxor" element={<Luxor />} />
        <Route path="NewYork" element={<NewYork />} />
        <Route path="Greece" element={<Greece />} />

        <Route />
      </Routes>
    </React.Fragment>
  );
}

export default App;
