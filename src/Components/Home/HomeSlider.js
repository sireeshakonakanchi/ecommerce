import React from "react";
import img1 from "../../images/slider.jpg";
import img2 from "../../images/slider2.jpg";
import img3 from "../../images/slider3.jpg";
import img4 from "../../images/slider2.jpg";


export default function HomeSlider() {
  return (
    <>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="1500">
        <img src={img1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="1500">
        <img src={img2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="1500">
        <img src={img3} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item" data-bs-interval="1500">
        <img src={img4} className="d-block w-100" alt="..."/>
      </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
   </>
  );
}