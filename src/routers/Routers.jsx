import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About/About";
import Angkutaja from "../components/Home/Angkutaja/Angkutaja";
import Detail from "../components/Home/Detail/Detail";
import UpdateDetail from "../components/Home/Detail/UpdateDetail";
import Order from "../components/Home/Order/Order";
import NotFound from "../components/NotFound/NotFound";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Angkutaja />} />
        <Route path="/home">
            <Route path="angkutaja" element={<Angkutaja />} />
            <Route path="order" element={<Order />} />
            <Route path="detail" element={<Detail />} />
            <Route path="editdetail" element={<UpdateDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
