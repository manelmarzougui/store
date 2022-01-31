import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProdReducer } from "../js/reducers/Reducer";
import Addmodale from "./Addmodale";
import Boutiquecard from "./Boutiquecard";

function Boutiqueliste() {
  const liste = useSelector((state) => state.prod);
  const [text, settext] = useState("");
  return (
    <div>
      <div className="filter">
        <Link to="/">
          <img
            src="https://static.thenounproject.com/png/999966-200.png"
            alt="logo"
          />
        </Link>
        <Link to="">Femme</Link>
        <Link to="">Homme</Link>
        <Link to="">Enfant</Link>
        <input
          placeholder="Recherche"
          onChange={(e) => settext(e.target.value)}
        />
      </div>
      <div className="liste">
        {liste
          .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
          .map((el) => (
            <Boutiquecard boutique={el} />
          ))}
      </div>
      <div className="add">
        <Addmodale />
      </div>
    </div>
  );
}

export default Boutiqueliste;
