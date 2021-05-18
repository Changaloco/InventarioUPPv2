import React from "react";
import Navbar from "../components/sidebar/Navbar";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Modelos() {
  return (
    
    <div>
      <Navbar/>
      <div className='menu'>
      <h1>Modelos</h1>
      <Button variant="primary" >
            Nuevo Modelo
          </Button>
    </div>
    <div>
    <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Marca </th>
                <th>SubMarca</th>
                <th>Modelo</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </Table>
    </div>
    </div>
  );
}

export default Modelos;