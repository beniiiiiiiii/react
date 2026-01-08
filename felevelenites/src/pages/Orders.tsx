import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Order } from "../types/Order";
import apiClient from "../api/apiClient";
import { toast } from "react-toastify";
import { Container, Row } from "react-bootstrap";

const Orders = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = useState<Array<Order>>([]);

  useEffect(() => {
    apiClient
      .get("/rendelesek")
      .then((res) => setOrders(res.data))
      .catch(() => toast.error("sikertelen bvetoltes"));
  }, []);

  return (
    <>
      <Container>
        <Row>
          {orders.map((i) => (
            <h1>
              {i.id} - {i.mennyiseg}
            </h1>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Orders;
