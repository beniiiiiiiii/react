import { useEffect, useState } from "react";
import "../App.css";
import apiClient, { BACKEND_URL } from "../api/apiClient.ts";
import type { Pizza } from "../types/Pizza.ts";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function App() {
  const [pizzak, setPizzak] = useState<Pizza[]>([]);

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((respone) => setPizzak(respone.data))
      .catch(() => toast.error("Hiba történt a pizzák betöltése során"));
  }, []);

  return (
    <>
      {pizzak.map((p) => (
        <p>
          <h2>{p.nev}</h2>
          <p>{p.ar}Ft</p>
          <p>{p.leiras}</p>
          <img src={`${BACKEND_URL}/kepek/${p.imageUrl}`} width={300} />
          <Link to={`/edit-pizza/${p.id}`}><button>Edit</button></Link>
        </p>
      ))}
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
    </>
  );
}

export default App;
