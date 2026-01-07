import { useState, useEffect } from "react";
import type { Auto } from "../types/Auto";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  Carousel,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const AllCars = () => {
  const [car, setCar] = useState<Array<Auto>>();
  const [cart, setCart] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("cart") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/autok/")
      .then((res) => setCar(res.data))
      .catch(() => toast.error("Autok betoltese sikertelen"));
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const GenerateCard = (a: Auto) => {
    return (
      <>
        <Card style={{ width: "18rem", height: "35rem" }}>
          <Carousel>
            {a?.images.map((url) => (
              <Carousel.Item>
                <Carousel.Item interval={3000} />
                <img
                  src={`${BACKEND_URL}/kepek/${url}`}
                  height={"300rem"}
                  width={"300rem"}
                />
              </Carousel.Item>
            ))}
          </Carousel>
          <Card.Body>
            <Card.Title>
              {a.marka} {a.modell}
            </Card.Title>
            <Card.Text>
              {a.szin} <br />
              {a.ar} <br />
              {a.uzemanyag} <br />
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                setCart([...cart, Number(a.id)]);
                toast.success("Sikeresen hozzáadva a kosárhoz");
              }}
            >
              <IoMdCart />
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">Cars</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/new-pizza">New Pizza</Nav.Link>
            <Nav.Link href="/cart">
              <IoMdCart /> ({cart.length})
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Row xs={"auto"} md={"auto"} lg={"auto"}>
          {car?.map((i) => GenerateCard(i))}
        </Row>
      </Container>
    </>
  );
};

export default AllCars;
