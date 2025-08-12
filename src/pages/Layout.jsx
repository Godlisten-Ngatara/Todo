import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Components from "./Components";
function Layout() {
  return (
    <div className="w-full h-full">
      <NavBar/>
      <Outlet/>
    </div>
  );
}

export default Layout;
