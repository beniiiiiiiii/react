import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";

const SelectedPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<Pizza>();

  useEffect(() => {
    apiClient
      .get(`/pizzak/${id}`)
      .then((response) => setPizza(response.data))
      .catch((reason) => alert(reason));
  }, [id]);

  return (
    <>
      <h2>{pizza?.nev}</h2>
      <p>{pizza?.ar}Ft</p>
      <img src={`${BACKEND_URL}/kepek/${pizza?.imageUrl}`} width={300} />
    </>
  );
};

export default SelectedPizza;
