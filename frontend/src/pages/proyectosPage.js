import React from "react";
import Navbar from "../components/sidebar/Navbar";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Proyectos() {
  return (
    <>
    <div>
      <Navbar/>
      <div className='menu'>
      <h1>Proyectos</h1>

      <Button variant="primary" >
            Nuevo Proyecto
          </Button>
    </div>
    <div>
    <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Clave Proyecto</th>
                <th>Nombre Proyecto</th>
                <th>Partida Presupuestal</th>
                <th>Fuente de Financiamiento</th>
                <th>Numero de la cuenta</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </Table>
    </div>
    </div>
    </>
  );
}

export default Proyectos;