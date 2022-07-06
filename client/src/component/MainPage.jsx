import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";
const MainPage = () => {
  return (
    <div className="home-container">
      <br />
      <br />
      <br />
      <p className="card">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam suscipit
        dolorum itaque, perferendis, natus velit necessitatibus nobis laboriosam
        ullam accusamus, eligendi omnis sequi cupiditate! Pariatur nostrum atque
        possimus suscipit eius. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolores dolorum doloremque repellat exercitationem. Aliquid quia, commodi, iure dignissimos rerum voluptatum dicta natus sapiente quis iusto deleniti ea distinctio doloribus?
      </p>
      <Link to="about" className="btn btn-primary">
        About us
      </Link>
    </div>
  );
};

export default MainPage;
