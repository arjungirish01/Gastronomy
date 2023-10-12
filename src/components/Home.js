import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap'
import data from "../data"
import Header from "./Header.js";
import Carousel from "./Carousel.js"

export default function Home(){

  let cardElement=data.map((data,index)=>(
    <div className="card" style={{"width": "18rem"}} key={index}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{data.desc}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  ))

  return(
    <div className="container-fluid mx-0">
        <Header />
        <Carousel />
        <div className="row my-3">
            <div className="col-4 gx-2">
              {cardElement}
            </div>
        </div>
    </div>
  )
}