import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NewWorkplace from "./pages/NewWorkplace";
import Signin from "./pages/Signon";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/newworkplace" element={<NewWorkplace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
