import React from "react";
import Navbar from "../components/sidebar/Navbar";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { axios } from "../services/axios";

function Proyectos() {
  
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [proyectos, setProyectos] = useState([]);
  const [proyectoSelected, setProyectoSelected] = useState({
    claveProyecto: "",
    nombrProyecto: "",
    partidaPresupuestal:"",
    fuenteFinanciamiento:"",
    numeroCuenta:""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProyectoSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //*funciones axios
  const insertProyecto = async () => {
    await axios
      .post("proyectos", proyectoSelected)
      .then(
        (response) => setProyectos(proyectos.concat(response.data)),
        OpenCloseModalInsert(),
        setProyectoSelected(null)
      );
  };
  const editProyecto = async () => {
    await axios
      .put("proyectos/" + proyectoSelected.id_Proyecto, proyectoSelected)
      .then((response) => {
        var dataNueva = proyectos;
        dataNueva.map((proyectos) => {
          if (proyectoSelected.id_Proyecto === proyectos.id_Proyecto) {
            proyectos.claveProyecto = proyectoSelected.claveProyecto;
            proyectos.nombrProyecto = proyectoSelected.nombrProyecto;
            proyectos.partidaPresupuestal = proyectoSelected.partidaPresupuestal;
            proyectos.fuenteFinanciamiento = proyectoSelected.fuenteFinanciamiento;
            proyectos.numeroCuenta = proyectoSelected.numeroCuenta;
          }
        });
        setProyectos(dataNueva);
        setProyectoSelected(null);
        OpenCloseModalEdit();
      });
  };
  const deleteProyecto = async () => {
    await axios.delete("proyectos/" + proyectoSelected.id_Proyecto).then((response) => {
      setProyectos(proyectos.filter((proyectos) => proyectos.id_Proyecto !== proyectoSelected.id_Proyecto));
      setProyectoSelected(null);
      OpenCloseModalDelete();
    });
  };
  //*hook efectos de la pagina
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("proyectos")
        .then((response) => {
          setProyectos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);
  //*Funciones Modales
  const selectProyecto = (proyecto, caso) => {
    setProyectoSelected(proyecto);
    caso === "Editar" ? OpenCloseModalEdit() : OpenCloseModalDelete();
  };
  const OpenCloseModalInsert = () => {
    setModalInsert(!modalInsert);
  };
  const OpenCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };
  const OpenCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  return (
    <>
    <div>
      <Navbar/>
      <div className='menu'>
      <h1>Proyectos</h1>

      <Button variant="primary" onClick={()=>OpenCloseModalInsert()} >
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
            {proyectos.map((proyectos)=>(
                <tr key={proyectos.id_Proyecto}>
                  <td>{proyectos.id_Proyecto}</td>
                  <td>{proyectos.claveProyecto}</td>
                  <td>{proyectos.nombrProyecto}</td>
                  <td>{proyectos.partidaPresupuestal}</td>
                  <td>{proyectos.fuenteFinanciamiento}</td>
                  <td>{proyectos.numeroCuenta}</td>
                  <td>
                  <Button
                      variant="success"
                      onClick={()=>selectProyecto(proyectos,"Editar")}
                    >
                      Editar
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                      variant="danger"
                      onClick={()=>selectProyecto(proyectos,"Eliminar")}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
    </div>
    </div>
    

    <Modal show={modalInsert} onHide={() => OpenCloseModalInsert()}>
        <Modal.Header>
          <Modal.Title>Insertar Un Nuevo Departamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Clave del Proyecto</Form.Label>
              <Form.Control name="claveProyecto" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Nombre del Proyecto</Form.Label>
              <Form.Control name="nombrProyecto" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Partida Presupuestal</Form.Label>
              <Form.Control name="partidaPresupuestal" onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Fuente de financiamiento</Form.Label>
              <Form.Control name="fuenteFinanciamiento" onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Numero de cuenta.</Form.Label>
              <Form.Control name="numeroCuenta" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => insertProyecto()}>
            Guardar
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="secondary" onClick={OpenCloseModalInsert}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

    <Modal show={modalDelete} onHide={() => OpenCloseModalEdit()}>
        <Modal.Header>
          <Modal.Title>Eliminar Proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Esta seguro de que desea eliminar este proveedor ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => deleteProyecto()}>
            Confirmar
          </Button>
          <Button variant="secondary" onClick={() => OpenCloseModalDelete()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Proyectos;