import React from 'react';
import Navbar from '../components/sidebar/Navbar';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

function Proveedores() {
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [proveedores, setProveedores] = useState([]);
  const [proveedorSelected,setProveedorSelected] = useState({
    nombreProveedor:'',
    RFCproveedor:'', 
    domicilioFiscalProveedor: '',
    telefonoProveedor:'',
    correoProveedor:'',
    giro:''
  });
  
  const handleChange=e=>{
    const{name,value}=e.target;
    setProveedorSelected(prevState=>({
      ...prevState,
      [name]:value
    }))
    console.log(proveedorSelected);
  }

  const insertUser=async()=>{
    await axios.post('http://localhost:4000/api/proveedores',proveedorSelected)
    .then(response=>
      setProveedores(proveedores.concat(response.data)), 
      OpenCloseModalInsert()
      )
  }
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4000/api/proveedores")
        .then((response) => {
          setProveedores(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  const OpenCloseModalInsert = () => {
    setModalInsert(!modalInsert);
  };
  const OpenCloseModalEdit = ()=>{
    setModalEdit(!modalEdit);
  }

  const selectProveedor= (proveedor,caso) => {
    setProveedorSelected(proveedor);
    (caso ==='Editar')&&setModalEdit(true)
  }

  return (
    <>
    <div>
        <Navbar />
        <div className="menu">
          <h1>Proveedores</h1>
          <Button variant="primary" onClick={OpenCloseModalInsert}>
            Agregar Usuario
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre del Proveedor</th>
                <th>RFC</th>
                <th>Domicilio Fiscal</th>
                <th>Telefono</th>
                <th>Correo Electronico</th>
                <th>Giro</th>
               
              </tr>
            </thead>
            <tbody>
              {proveedores.map((proveedor) => (
                <tr key={proveedor.id_Proveedor}>
                  <td>{proveedor.id_Proveedor}</td>
                  <td>{proveedor.nombreProveedor}</td>
                  <td>{proveedor.RFCproveedor}</td>
                  <td>{proveedor.domicilioFiscalProveedor}</td>
                  <td>{proveedor.telefonoProveedor}</td>
                  <td>{proveedor.correoProveedor}</td>
                  <td>{proveedor.giro}</td>
                  <td>
                    <Button variant="success">Editar</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button variant="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>



      <Modal show={modalInsert} onHide={OpenCloseModalInsert}>
        <Modal.Header>
          <Modal.Title>Insertar Nuevo Proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group >
              <Form.Label>Nombre Proveedor</Form.Label>
              <Form.Control name="nombreProveedor" value={proveedorSelected && proveedorSelected.nombreProveedor} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>RFC del Proveedor </Form.Label>
              <Form.Control name="RFCproveedor" value={proveedorSelected && proveedorSelected.RFCproveedor} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Domicilio del Proveedor</Form.Label>
              <Form.Control name="domicilioFiscalProveedor" value={proveedorSelected && proveedorSelected.domicilioFiscalProveedor} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Telefono del Proveedor</Form.Label>
              <Form.Control name="telefonoProveedor" value={proveedorSelected && proveedorSelected.telefonoProveedor} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" name="correoProveedor" value={proveedorSelected && proveedorSelected.correoProveedor} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Giro</Form.Label>
              <Form.Control  name="giro" value={proveedorSelected && proveedorSelected.giro} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={insertUser}>Guardar</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="secondary" onClick={OpenCloseModalInsert}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>



      <Modal show={modalEdit} onHide={OpenCloseModalEdit}>
        <Modal.Header>
          <Modal.Title>Editar Proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group >
              <Form.Label>Nombre Proveedor</Form.Label>
              <Form.Control name="nombreProveedor" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>RFC del Proveedor </Form.Label>
              <Form.Control name="RFCproveedor" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Domicilio del Proveedor</Form.Label>
              <Form.Control name="domicilioFiscalProveedor" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Telefono del Proveedor</Form.Label>
              <Form.Control name="telefonoProveedor" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" name="correoProveedor" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Giro</Form.Label>
              <Form.Control  name="giro" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={insertUser}>Guardar</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="secondary" onClick={OpenCloseModalEdit}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Proveedores;