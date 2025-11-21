import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import NewPizza from "./pages/NewPizza.tsx";
import EditPizza from "./pages/EditPizza.tsx";
import NotFound from "./pages/NotFound.tsx";
import Index from "./pages/index.tsx";
import AllPizza from "./pages/AllPizza.tsx";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/" element={<Index />} />
        <Route path="/pizzak" element={<AllPizza />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
