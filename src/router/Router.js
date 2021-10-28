import { BrowserRouter, Route } from "react-router-dom";
import React from "react";

import Init from "../pages/Init.page";
import Home from "../pages/Home.page";
import Offers from "../pages/Offers.page";

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
