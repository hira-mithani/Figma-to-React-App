import React from "react";
import heroImg from "../../assets/heroImg.png";

const HeroSection = () => {
  return (
    <div className="container d-flex">
      <div className="text-black mt-5 pt-5">
        <h2 style={{ marginTop: "200px", fontSize: "50px", color: "#364547" }}>
          Fair price ride
        </h2>
        <h3 style={{ fontSize: "80px" }}>
          <span style={{ color: "#364547" }}>Rent our</span>
          <span className="highlight mx-2 fw-bold" style={{ color: "#ef8d21" }}>
            Scooter
          </span>
        </h3>
        <p style={{ color: "#364547", fontSize: "19px" }}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div>
        <img src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
};

export default HeroSection;
