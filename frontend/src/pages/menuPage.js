import React from "react";
import Navbar from "../components/sidebar/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Link} from "react-router-dom";
function Menu() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <h1 style={{ textAlign: "center" }}>Menu</h1>
        </div>
        <div>
          <Jumbotron>
            <h1>Usuarios</h1>
            <p>
              Ir hacia la pagina de administracion de usuarios.
            </p>
            <p>
              <Button  variant="primary">
                <Link style={{color: "white"}} to="/usuarios">Ir hacia Usuarios</Link>
              </Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    </>
  );
}

export default Menu;
