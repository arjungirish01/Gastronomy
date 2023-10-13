import React from "react";
import logo from "../images/logo/logo.png";

export default function Footer(){
  return(
    <div className="footer mt-5 mb-3 mx-3" style={{'color':'white'}}>
        <div className="row">
            <div className="col-4">
                <div className="about">
                    <div clasName="logo" style={{'display':'flex', 'alignItems':'center'}}>
                      <img className="img-fluid" src={logo} style={{'width':'50px','height':'50px'}} />
                      <h1 className="h1">PixelDev</h1>
                    </div>
                    <p>Designed and built with all the love in the world</p>
                    <p>Current version v1.0</p>
                </div>
            </div>
        </div>
    </div>
  )
}