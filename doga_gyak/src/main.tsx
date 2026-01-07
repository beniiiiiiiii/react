import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AddPizza from "./pages/AddPizza.tsx;
import EditPizza from "./pages/EditPizza.tsx";
import NotFound from "./pages/NotFound.tsx";
import Index from "./pages/index.tsx";
import AllPizza from "./pages/AllPizza.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="new-pizza" element={<AddPizza />}/>
        <Route path="/edit-pizza6:id" element={<EditPizza />}/>
        <Route path="/pizzak" element={<AllPizza />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
