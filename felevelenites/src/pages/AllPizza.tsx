import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import { useNavigate } from "react-router-dom";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllPizza = () => {
  const navigate = useNavigate();

  const [pizzak, setPizzak] = useState<Array<Pizza>>([]);
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/pizzak/")
      .then((res) => setPizzak(res.data))
      .catch(() => toast.error("Pizzak betoltese sikertelen"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${BACKEND_URL}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>
              {p.leiras}
              {p.ar}
            </Card.Text>
            <Button
              onClick={() => navigate(`/pizza/${p.id}`)}
              variant="primary"
            >
              Megtekintes
            </Button>
            <Button
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
                toast.success("Kosárba helyezve");
              }}
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      <Container>
        <Row xs={"auto"} md={"auto"} className="g-4">
          {pizzak.map((i) => generateCard(i))}
        </Row>
      </Container>
    </>
  );
};

export default AllPizza;
