import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  const [pizzak, setPizzak] = useState<Pizza[]>([]);
  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((respone) => setPizzak(respone.data))
      .catch(() => toast.error("Hiba történt a pizzák betöltése során"));
  }, []);

  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );
  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const removeItem = (searchedIndex: number) => {
    setKosar(kosar.filter((_, index) => index != searchedIndex));
    toast.success("Sikeres törlés");
  };

  /*const generateCard = (p: Pizza) => {
    return (
        
      <Col>
        <Card style={{ width: "20rem", height: "30rem" }}>
          <Card.Img variant="top" src={`${BACKEND_URL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Link to={`/edit-pizza/${p.id}`}>
              <Button>Edit</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    );
  };*/

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/pizzak">All pizzas</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Table striped bordered hover>
        <thead>
          <th>Név</th>
          <th>Ár</th>
          <th>Törlés</th>
        </thead>
        <tbody>
          {kosar.map((value, index) => {
            const pizza = pizzak.find((p) => p?.id == value);

            return (
              <tr>
                <td>{pizza?.nev}</td>
                <td>{pizza?.ar}Ft</td>
                <td>
                  <Button variant="danger" onClick={() => removeItem(index)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
