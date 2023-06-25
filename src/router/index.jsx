import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ServicePage from "../pages/ServicePage/ServicePage";
import Contacts from "../pages/Contacts/Contacts";
import Works from "../pages/Works/Works";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
};

export default index;
