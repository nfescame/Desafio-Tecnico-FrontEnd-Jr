import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

import Init from "../pages/Init";
import Home from "../pages/Home";
import Offers from "../pages/Offers";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path='/' component={Init} exact />
      <Route path='/home/:cep' component={Home} />
      <Route path='/offers' component={Offers} />
      <Footer />
    </BrowserRouter>
  );
};

export default Routes;
