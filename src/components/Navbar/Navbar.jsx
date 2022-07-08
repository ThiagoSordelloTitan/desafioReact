import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold fs-4" href="/">
            E-commerce
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contacto
                </a>
              </li>
            </ul>
            <div className="buttons">
                <a href="/" className="btn btn-outline-dark me-2">
                   <i className="fa fa-sign-in ml-2"></i>Ingresar</a>
                   <a href="/" className="btn btn-outline-dark me-2">
                   <i className="fa fa-user-plus me-2"></i>Registrarse</a>
                   <a href="/" className="btn btn-outline-dark">
                   <i className="fa fa-shopping-cart me-2"></i>Carrito (0)</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
