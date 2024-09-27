import React from "react";
import heroImg from "../../assets/heroImg.png";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h4 className="fw-4 " style={{ marginTop: "300px" }}>
            Fair price ride
          </h4>
          <h1 className="fs-1">
            {" "}
            Rent our <span className="text-warning">Scooter</span>{" "}
          </h1>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.{" "}
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img className="img-fluid" src={heroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
