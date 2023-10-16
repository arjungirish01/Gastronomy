import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap'
import data from "../data";
import cooking from "../cooking";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Video from "./Video.js";
import "./Cooking.css";

export default function Recipe(prop){
    const pic=data[(prop.itemId)-1].img;
    const food=cooking.filter(item=>item.id===prop.itemId);
    const ingredients=food[0].ingredients.map(item=>(
      <li>{item}</li>
    ))

    const process=food[0].steps.map(item=>(
      <li>{item}</li>
    ))

  return (
    <div className="container-fluid p-0 bg-dark">
        <Header />
        <div className="recipe-details">
          <div className="col-6">
            <div className="card mx-2" style={{'marginTop':'6rem'}}>
            <div className="card-header">
              <h3 className="h3">Culinary Masterpiece</h3>
            </div>
            <div className="card-body">
              <div className="text-center">
              <h5 className="card-title">{food[0].title}</h5>
              </div>
              <h5 className="h5">Ingredients</h5>
              <ul>
                {ingredients}
              </ul>
              <h5 className="h5">Steps</h5>
                  <ul>
                    {process}
                  </ul>
            </div>
          </div>
          {/* <div className="text-center mt-5">
              <Video />
            </div> */}
        </div>
        <div className="col-6" style={{'margin':'6rem'}}>
          <div class="card mb-3" style={{"max-width": "540px"}}>
          <div class="row g-0">
          <div class="col-md-4">
          <img src={pic} class="img-fluid rounded-start" alt="biriyani" style={{'height':'100%'}} />
          </div>
          <div class="col-md-8">
          <div class="card-body">
          <h5 class="card-title">Hyderabadi Bawarchi</h5>
          <p class="card-text">88/1/b, Pipe Line Road, Bhagya Nagar Colony, Kukatpally, Hyderabad, Telangana 500072, India</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
          </div>
          </div>
</div>
<div className="mt-5">
              <Video />
            </div>
          </div>
            
        </div>
        <Footer className="mt-2" />
    </div>
  )
}