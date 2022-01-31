import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteProd } from "../js/action/Action";
import { useDispatch } from "react-redux";

function Boutiquecard({ boutique }) {
  const dispatch = useDispatch();

  return (
    <div className="kha">
      <Card style={{ width: "15rem", height: "33rem" }}>
        <Link to={`/Desc/${boutique.id}`}>
          <Card.Img variant="top" src={boutique.url} />
        </Link>
        <Card.Body className="info">
          <Card.Title></Card.Title>
          <Card.Text>{boutique.name}</Card.Text>
          <Card.Text>{boutique.prix}</Card.Text>
          {/* <Link to="/Desc">
            <Link
              variant="primary"
              style={{
                color: "black",
                TextDecoder: "none",
              }}
              to={`/Desc/${boutique.id}`}
            >
              see more
            </Link>
          </Link> */}
          <div>
            <button
              className="deletee"
              onClick={() => dispatch(deleteProd(boutique.id))}
            >
              Delete
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Boutiquecard;
