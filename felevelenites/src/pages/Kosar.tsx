import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { BiChurch } from "react-icons/bi";

const kosar = () => {
  const [pizzak, setPizza] = useState<Array<Pizza>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/pizzak/")
      .then((res) => setPizza(res.data))
      .catch(() => toast.error("Sikertelen betoltes"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((_, index) => index != searchedIndex));
    toast.success("sikeres torles");
  };

  return (
    <>
      <h1>Kosár tartalma</h1>
      {kosar.length > 0 ? (
        <>
          <Table striped bordered hover>
            <thead>
              <th>Név</th>
              <th>Ár</th>
              <th>Törlés</th>
            </thead>
            <tbody>
              {kosar.map((id, index) => {
                const pizza = pizzak.find((p) => p.id == id);

                return (
                  <tr>
                    <td>{pizza?.nev}</td>
                    <td>{pizza?.ar} Ft</td>
                    <td>
                      <Button
                        onClick={() => removeItem(index)}
                        variant="danger"
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button onClick={() => setKosar([])} variant="warning">
            Kiürítés
          </Button>
        </>
      ) : (
        <h2>A kosár tartalma üres</h2>
      )}
    </>
  );
};

export default kosar;
