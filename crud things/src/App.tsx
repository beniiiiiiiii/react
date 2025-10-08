import { useEffect, useState } from "react";
import "./App.css";
import type { Ad } from "./types/Ad.ts";
import apiClient, { BACKEND_URL } from "./api/apiClient.ts";

function App() {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    apiClient
      .get("/")
      .then((response) => setAds(response.data))
      .catch((reason) => alert(reason));
  }, []);

  return (
    <>
      {ads.map((a) => (
        <div>
          <h2>{a.position.name}</h2>
          <img src={"https://s3.sootsoft.hu/365commercial/" + a.key} />
        </div>
      ))}
    </>
  );
}

export default App;
