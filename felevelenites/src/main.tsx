import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPizza from "./pages/AllPizza.tsx";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import OnePizza from "./pages/OnePizza.tsx";
import EditPizza from "./pages/EditPizza.tsx";
import NewPizza from "./pages/NewPizza.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Kosar from "./pages/Kosar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="pizza/:id" element={<OnePizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/cart" element={<Kosar />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
