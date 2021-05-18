import React from "react";
import Navbar from "../components/sidebar/Navbar";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Depreciacion() {
  return (
    
    <div>
      <Navbar/>
      <div className='menu'>
      <h1>Catalogo de Depreciacion</h1>
      <Button variant="primary" >
            Nuevo Elemento del Catalogo de Depreciacion
          </Button>
    </div>
    <div>
    <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Concepto</th>
                <th>Tiempo de vida Util en Años</th>
                <th>Porcentaje de Depreciacion Anual</th>
                <th>Porcentaje de Depreciacion Mensual</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </Table>
    </div>
    </div>
  );
}

export default Depreciacion;