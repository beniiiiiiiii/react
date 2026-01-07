import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import OneAuto from "./pages/OneAuto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auto/:id" element={<OneAuto />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
