import React from "react";
import brar from "../images/chefs/ranveer.jpg";
import gordon from "../images/chefs/Gordon.jpg";
import alian from "../images/chefs/Alian.jpg";

export default function Carousel(){
  return(
    <div className="container-fluid mx-0 p-0">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={brar} class="d-block w-100" alt="Ranveer Brar"  style={{'width':'100%','height':'400px'}} />
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={gordon} className="d-block w-100" alt="Gordon Ramsay" style={{'width':'100%','height':'400px'}} />
    </div>
    <div className="carousel-item">
      <img src={alian} class="d-block w-100" alt="Alian" style={{'width':'100%','height':'400px'}} />
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
    </div>
  )
}