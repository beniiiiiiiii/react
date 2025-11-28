import { useState, useEffect } from "react";
import type { Auto } from "../types/Auto";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Carousel, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

const AllCars = () => {
  const [car, setCar] = useState<Array<Auto>>();

  useEffect(() => {
    apiClient
      .get("/autok/")
      .then((res) => setCar(res.data))
      .catch(() => toast.error("Autok betoltese sikertelen"));
  });

  const GenerateCard = (a: Auto) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Carousel>
          {a?.images.map((url) => (
            <Carousel.Item>
              <Carousel.Item interval={3000} />
              <img src={`${BACKEND_URL}/kepek/${url}`} />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Body>
          <Card.Title>
            {a.marka} {a.modell}
          </Card.Title>
          <Card.Text>
            {a.szin}
            {a.ar}
            {a.uzemanyag}
          </Card.Text>
          <Link to={"/cart"}>
            <Button variant="primary">
              <IoMdCart />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container>
      <Row xs={"auto"} md={"auto"} lg={"auto"}>
        {car?.map((i) => GenerateCard(i))}
      </Row>
    </Container>
  );
};

export default AllCars;
