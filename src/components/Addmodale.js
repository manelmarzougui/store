import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProd } from "../js/action/Action";

function AddModale() {
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [test, settest] = useState({
    id: Math.random(),
    name: "",
    url: "",
    prix: "",
  });
  const dispatch = useDispatch();
  // const handleAdd = (e) => {
  //   dispatch(addProd(test));
  // };

  return (
    <div>
      <div
        onClick={handleShow}
        style={{
          width: "18rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
          marginLeft: "550px",
          marginTop: "20px",
        }}
        className="ff"
      >
        <button
          style={{
            color: "white",
            backgroundColor: "#90d0e0",
            border: "none",
            borderradius: "8px",
          }}
        >
          Add product
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New product</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <input
            placeholder="name"
            onChange={(e) => {
              settest({ ...test, name: e.target.value });
            }}
          />
          <input
            placeholder="url"
            onChange={(e) => {
              settest({ ...test, url: e.target.value });
            }}
          />
          <input
            placeholder="prix"
            onChange={(e) => {
              settest({ ...test, prix: e.target.value });
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => dispatch(addProd(test))}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddModale;
