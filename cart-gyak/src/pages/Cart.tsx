import { useEffect, useState } from "react";
import type { Auto } from "../types/Auto";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { BiChurch } from "react-icons/bi";

const Cart = () => {
  const [cars, setCars] = useState<Auto[]>([]);
  useEffect(() => {
    apiClient
      .get("/autok")
      .then((res) => setCars(res.data))
      .catch(() => toast.error("Autok betoltese sikertelen"));
  }, []);

  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const RemoveItem = (searchedIndex: number) => {
    setCart(cart.filter((_, index) => index != searchedIndex));
    toast.success("Sikeres torles");
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <th>Név</th>
          <th>Ár</th>
          <th>Törlés</th>
        </thead>
        <tbody>
          {cart.map((value, index) => {
            const auto = cars.find((a) => a?.id == value);

            return (
              <tr>
                <td>
                  {auto?.marka} {auto?.modell}
                </td>
                <td>{auto?.ar}Ft</td>
                <td>
                  <Button variant="danger" onClick={() => RemoveItem(index)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button onClick={() => setCart([])} variant="warning">
        <BiChurch />
      </Button>
    </>
  );
};

export default Cart;
