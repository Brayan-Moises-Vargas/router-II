import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CardPoke = ({ pokemon }) => {
  const { name, stats, src, types } = pokemon;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemons`);
  };

  return (
    <div className="container text-center mt-5">
      <Card style={{ width: "40rem" }} className="mx-auto shadow-lg p-3 mb-5 bg-dark rounded text-white">
        <Card.Img src={src} height="300" alt={name} />
        <Card.Body>
          <Card.Title className="fw-bold">{name}</Card.Title>
          <ul className="list-unstyled text-start">
            {stats?.map((stat, i) => (
              <li key={i}>
                {stat.name}: {stat.base}
              </li>
            ))}
          </ul>
          <Card.Text className="bg-danger text-white p-2 rounded fw-bold text-center text-capitalize mt-3">
            {types}
          </Card.Text>
        </Card.Body>
      </Card>
      <Button
        onClick={handleClick}
        className="btn btn-info btn-lg btn-block mt-1"
      >
        Back
      </Button>
    </div>
  );
};

export default CardPoke;


