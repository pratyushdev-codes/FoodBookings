import { useRef } from 'react';
import React from 'react';
import { Link , Route , Routes } from 'react-router-dom'

function Navbar() {
  const ref = useRef(null);

  const handleClick = (id, event) => {
    event.preventDefault(); // Prevent default anchor tag behavior 
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>    
      <nav className="navbar navbar-expand-lg bg-body-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', position: "fixed", zIndex: "999", width: "100%" }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand mx-2" href="#"><img src="./images/logooo.jpeg" style={{ height: "100px", width: "100px" ,borderRadius:"4px" }} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#" onClick={(event) => handleClick('home', event)} style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#" onClick={(event) => handleClick('about', event)} style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>About Us</a>
              </li>
              <li className="nav-item">
                <Link to="/News" className="nav-link active mx-2" style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>News</Link>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row align-items-center">
              <Link to="/Middleware">
                <button className="btn btn-glow mx-2" style={{ borderRadius:"20px", backgroundColor:"#FFC200"}}>Food Ordering Portal | VIT </button>
              </Link>
              <Link to="/Contact">
                <button className="btn btn-primary mx-2" style={{ borderRadius:"20px", backgroundColor:"#036EFD" }}>Contact Us</button> 
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
