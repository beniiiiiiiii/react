import { useState, useEffect } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditPizza = () => {
  const { id } = useParams();
  const [nev, setNev] = useState<string>("");
  const [leiras, setLeiras] = useState<string>("");
  const [ar, setAr] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string>("");

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => {
        setNev(response.data.nev ?? "");
        setLeiras(response.data.leiras ?? "");
        setAr(response.data.ar ?? 0);
        setImageUrl(response.data.imageUrl ?? "");
      })
      .catch(() => toast.error("Hiba történt a pizzak betöltése során"));
  }, [id]);

  const submit = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };
    apiClient
      .put(`/pizzak/${id}`, p)
      .then(() => toast.success("Sikeres változások"))
      .catch(() => toast.error("Hibá történt a változtatásnál"));
  };

  const deleteFunc = () => {
    const p: Pizza = {
      nev,
      leiras,
      ar,
      imageUrl,
    };
    apiClient
      .delete(`/pizzak/${id}`)
      .then(() => toast.success("Sikeres törlés"))
      .catch(() => toast.error("Sikertelen Törlés"));
  };

  return (
    <>
      <h1>Pizza Módosítás</h1>

      <table>
        <tr>
          <td>Név</td>
          <td>
            <input
              type="text"
              value={nev}
              onChange={(e) => setNev(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Leírás</td>
          <td>
            <input
              type="text"
              value={leiras}
              onChange={(e) => setLeiras(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Ár (Ft)</td>
          <td>
            <input
              type="number"
              value={ar}
              onChange={(e) => setAr(Number(e.target.value))}
            />
          </td>
        </tr>
        <tr>
          <td>Kép (URL)</td>
          <td>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </td>
        </tr>
      </table>
      <button onClick={submit}>Módosítás</button>
      <button onClick={deleteFunc}>Törlés</button>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </>
  );
};

export default EditPizza;
