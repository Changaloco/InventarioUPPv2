import React from "react";
import Navbar from "../components/sidebar/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <h1 style={{ textAlign: "center" }}>Menú</h1>
        </div>
        <div>
          <Jumbotron style={{backgroundColor:"lightcoral",textAlign: "center"}}>
            <h1>Usuarios</h1>
            <p>Ir hacia la pagina de administracion de usuarios.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/usuarios">
                  Ir hacia Usuarios
                </Link>
              </Button>
            </p>
          </Jumbotron>
          <Jumbotron style={{backgroundColor:"lightblue",textAlign: "center"}}>
            <h1>Proveedores</h1>
            <p>Ir hacia la pagina de administracion de proveedores.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/proveedores">
                  Ir hacia Proveedores
                </Link>
              </Button>
            </p>
          </Jumbotron>
          <Jumbotron style={{backgroundColor:"lightgray",textAlign: "center"}}>
            <h1>Clasificaciones de CONAC</h1>
            <p>Ir hacia la pagina de administracion de las clasificaciones de CONAC.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/conac">
                  Ir hacia Clasificaciones de CONAC
                </Link>
              </Button>
            </p>
          </Jumbotron>
          <Jumbotron style={{backgroundColor:"lightyellow",textAlign: "center"}}>
            <h1>Modelos</h1>
            <p>Ir hacia la pagina de administracion de Modelos.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/modelos">
                  Ir hacia Usuarios
                </Link>
              </Button>
            </p>
          </Jumbotron>
          <Jumbotron style={{backgroundColor:"lightgreen",textAlign: "center"}}>
            <h1>Proyectos</h1>
            <p>Ir hacia la pagina de administracion de proyectos.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/proyectos">
                  Ir hacia Proyectos
                </Link>
              </Button>
            </p>
          </Jumbotron>
          <Jumbotron style={{backgroundColor:"lightsalmon",textAlign: "center"}}>
            <h1>Trimestres</h1>
            <p>Ir hacia la pagina de administracion de trimestres.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/trimestres">
                  Ir hacia Trimestres
                </Link>
              </Button>
            </p>
          </Jumbotron>
          <Jumbotron style={{backgroundColor:"lightgoldenrodyellow",textAlign: "center"}}>
            <h1>Catalogo de Depreciaciones</h1>
            <p>Ir hacia la pagina de administracion del Catalogo de depreciaciones.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/depreciacion">
                  Ir hacia Catalogo de Depreciacion
                </Link>
              </Button>
            </p>
          </Jumbotron>
          <Jumbotron style={{backgroundColor:"lightskyblue",textAlign: "center"}}>
            <h1>Areas</h1>
            <p>Ir hacia la pagina de administracion de areas.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/areas">
                  Ir hacia Areas
                </Link>
              </Button>
            </p>
          </Jumbotron>
          <Jumbotron style={{backgroundColor:"lightsteelblue",textAlign: "center"}}>
            <h1>Departamentos</h1>
            <p>Ir hacia la pagina de administracion de Departamentos.</p>
            <p>
              <Button variant="primary">
                <Link style={{ color: "white" }} to="/departamentos">
                  Ir hacia Departamentos
                </Link>
              </Button>
            </p>
          </Jumbotron>
        </div>
      </div>
    </>
  );
}

export default Menu;
