import React from "react";
import logo from "../images/logo/logo.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer(){
  return(
    <div className="footer container-fluid mt-5 mb-3" style={{'color':'white','backgroundColor':'rgb(67, 65, 65)'}}>
        <div className="row">
            <div className="col-4">
                <div className="about">
                    <div className="logo" style={{'display':'flex', 'alignItems':'center'}}>
                      <img className="img-fluid" src={logo} style={{'width':'50px','height':'50px'}} />
                      <h1 className="h1">PixelDev</h1>
                    </div>
                    <p>Designed and built with all the love in the world</p>
                    <p>Current version v1.0</p>
                </div>
            </div>
            <div className="col-4">
                  <div className="contact">
                    <h3 className="h3">Get in Touch</h3>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-envelope-at-fill mx-2"></i>
                        <p>support@pixeldev.tech</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-telephone mx-2"></i>
                        <p>+49-17687884251</p>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-compass mx-2"></i>
                        <p>Frankenstrasse, Nürnberg, Germany</p>
                    </div>
                  </div>
              </div>
              <div className="col-4">
                  <div className="projects">
                      <h3 className="h3">Developer</h3>
                      <div className="d-flex align-items-center">
                          <i class="bi bi-github mx-2"></i>
                          <a href="#" target="_blank">GitHub</a>
                      </div>
                      <div className="d-flex align-items-center">
                          <i class="bi bi-linkedin m-2"></i>
                          <a href="#" target="_blank">LinkedIn</a>
                      </div>
                      <div className="d-flex align-items-center">
                          <i class="bi bi-substack mx-2"></i>
                          <a href="#" target="_blank">Portfolio</a>
                      </div>
                  </div>
              </div>
        </div>
      </div>
  )
}