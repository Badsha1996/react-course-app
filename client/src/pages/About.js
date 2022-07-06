import React from "react";
import { MDBTypography } from "mdb-react-ui-kit";
import "./About.css";

const About = () => {
  return (
    <div className="about-section">
      <div className="bg">

      </div>
      <div className="about-sec">
        <h1>About</h1>
        <MDBTypography note noteColor="secondary" >
        <p className="para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
          impedit quibusdam numquam inventore consequatur ipsum ab? Voluptatem
          ratione iusto praesentium commodi, animi necessitatibus recusandae.
          Quas esse dolor illum eveniet culpa. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Pariatur, placeat perspiciatis ea dolore
          voluptate odio? Suscipit aspernatur, vero harum adipisci distinctio
          maxime facilis ullam cupiditate, placeat sed corporis saepe aut. Lorem
        </p>
      </MDBTypography>
      </div>
      
    </div>
  );
};

export default About;
