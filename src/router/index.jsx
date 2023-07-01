import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Works from "../pages/Works/Works";
import ServicePage from "../pages/ServicePage/ServicePage";
import Prices from "../pages/Prices/Prices";
import Contacts from "../pages/Contacts/Contacts";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default index;
