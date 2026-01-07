import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Car } from "../types/Car";
import apiClient, { BACKEND_URL } from "../api/apiClient";
import { Carousel, Container } from "react-bootstrap";

const OneAuto = () => {
  const { id } = useParams();
  const [auto, setAuto] = useState<Car>();

  useEffect(() => {
    apiClient.get(`/autok/${id}`).then((res) => setAuto(res.data));
  }, [id]);

  return (
    <Container>
      <Carousel>
        {auto?.images.map((url) => (
          <Carousel.Item>
            <Carousel.Item interval={3000} />
            <img src={`${BACKEND_URL}/kepek/${url}`} />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default OneAuto;
