import React from "react";
import JumboComp from "../../component/JumboComp";

import NavbarComp from "../../component/NavbarComp";

import Loker from "../Loker/Loker";

import axios from "axios";

import Footer from "../../component/Footer";
// import {BrowserRouter, Route, Link} from 'react-router-dom';

const Home =()=> {
    return (
      <div>
        <NavbarComp />
        <Loker  />
        <Footer />
      </div>
    );
  }


export default Home;
