import "../App.css";
import { useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const NewPizza = () => {
  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  const addPizza = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };
    if (p.ar < 1) {
      alert("Az ár nem lehet kisebb mint 1Ft");
    } else {
      apiClient
        .post("/pizzak", p)
        .then(() => toast.success("Sikeresen hozzáadva"))
        .catch(() => toast.error("Hiba történt"));
    }
  };

  return;
};

export default NewPizza;
