import React from "react"
import logo from "../logo.png";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";


export default function Header(){
  return(
    <header>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a href="/">
         <img className="img-fluid" src={logo} alt="logo" style={{'width':'60px','height':'60px'}} />
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/">About Us</a>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      More
      </a>
      <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Under 30 Minutes</a></li>
      <li><a className="dropdown-item" href="#">World Food Ranking</a></li>
      <li><hr className="dropdown-divider" /></li>
      <li><a className="dropdown-item" href="#">Coffee with chef</a></li>
      </ul>
      </li>
      </ul>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </div>
      </div>
      </nav>
    </header>
  )
}