import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";
import image1 from "../image/image1.jpeg";
import image2 from "../image/image2.jpeg";
import image3 from "../image/image3.jpg";
import image4 from "../image/image4.jpg";

function Home() {
  const contentStyle = {
    height: "70vh",
    color: "#fff",
    lineHeight: "160px",
  };
  return (
    <div className="accueil">
      <div className="filter">
        <img
          src="https://static.thenounproject.com/png/999966-200.png"
          alt="logo"
        />
        <Link to="/Boutique">Femme</Link>
        <Link to="">Homme</Link>
        <Link to="">Enfant</Link>
      </div>
      <div className="acc">
        <Carousel autoplay>
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
