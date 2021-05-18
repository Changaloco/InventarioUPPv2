import React from "react";
import Navbar from "../components/sidebar/Navbar";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Trimestres() {
  return (
    
    <div>
      <Navbar/>
      <div className='menu'>
      <h1>Trimestres</h1>
      <Button variant="primary" >
            Nuevo Trimestre Agregado
          </Button>
    </div>
    <div>
    <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Ejercicio Fiscal</th>
                <th>Fecha de Comienzo</th>
                <th>Fecha de Finalizacion</th>
                <th>Numero de trimestre Correspondiente</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </Table>
    </div>
    </div>
  );
}

export default Trimestres;