import { useEffect, useState } from "react";
import apiClient, { BACKEND_URL } from "../api/apiClient.ts";
import type { Pizza } from "../types/Pizza.ts";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function App() {
  const [pizzak, setPizzak] = useState<Pizza[]>([]);

  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]")
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((respone) => setPizzak(respone.data))
      .catch(() => toast.error("Hiba történt a pizzák betöltése során"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (p: Pizza) => {
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
            <Button
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
                toast.success("Sikeresen a kosárba helyezve");
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
    <Container>
      <Row
        xs={"auto"}
        md={"auto"}
        lg={"auto"}
        xl={"auto"}
        xxl={"auto"}
        className="g-4"
      >
        {pizzak.map((i) => generateCard(i))}
      </Row>
    </Container>
  );
}

export default App;
