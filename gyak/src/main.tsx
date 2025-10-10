import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SelectedPizza from "./pages/SelectedPizza.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pizza/:id" element={<SelectedPizza />} />
    </Routes>
  </BrowserRouter>
);
