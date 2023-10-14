import React from "react";
import data from "../data";
import Header from "./Header.js";
import Footer from "./Footer.js";

export default function Recipe(prop){
    console.log(prop);
  return (
    <div className="container-fluid p-0" style={{'color':'white'}}>
        <Header />
        <h1 classname="h1" style={{'marginTop':'5rem','marginBottom':'200px'}}>Recipe</h1>
        <Footer className="mt-2" />
    </div>
  )
}