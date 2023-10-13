import React from "react"
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap'
import data from "../data"
import Header from "./Header.js";
import Carousel from "./Carousel.js"
import Footer from "./Footer.js";
import "./CSS/Home.css";


export default function Home(){

  let cardElement=data.map((data,index)=>(
    <div className="col-lg-4 col-sm-12 col-md-6">
        <div className="card m-2 cards" style={{"width": "19rem",'height':'34rem','border':'2px'}} key={index}>
      <img src={data.img} className="card-img-top" alt="food" style={{'width':'100%','height':'200px'}} />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <div className="text-justify">
        <p className="card-text ">{data.desc}</p>
        </div>
        <div className="text-center">
        <a href="#" className="btn btn-primary mt-2">Recipe and More</a>
        </div>
      </div>
    </div>
    </div> 
  ))

  return(
    <div className="container-fluid p-0 bg-dark">
        <Header />
        <Carousel />
        <div className="row mx-5 mt-2">
          {cardElement}
        </div>
        <Footer />   
    </div>
  )
}