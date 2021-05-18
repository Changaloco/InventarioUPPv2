import React from "react";
import Navbar from "../components/sidebar/Navbar";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { axios } from "../services/axios";

function Departamentos() {
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [departamentos, setDepartamentos] = useState([]);
  const [departamentoSelected, setDepartamentoSelected] = useState({
    nombreDepartamento:"",
    ubicacionDepartamento:""
  }
  )
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartamentoSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
//*funciones axios
const insertDepartamento = async () => {
  await axios
    .post("departamentos", departamentoSelected)
    .then(
      (response) => setDepartamentos(departamentos.concat(response.data)),
      OpenCloseModalInsert(),
      setDepartamentoSelected(null)
      
    );
};
const editDepartamento = async () => {
  await axios.put('departamentos/'+departamentoSelected.id_Departamento,departamentoSelected)
  .then((response)=>{
    var dataNueva = departamentos;
    dataNueva.map((conac)=>{
      if(departamentoSelected.id_Departamento === departamentos.id_Departamento){
        departamentos.nombreDepartamento= departamentoSelected.nombreDepartamento;
        departamentos.ubicacionDepartamento = departamentoSelected.ubicacionDepartamento;
        
      }
    })
  setDepartamentos(dataNueva);
  setDepartamentoSelected(null);
  OpenCloseModalEdit();
  })
}
const deleteDepartameto = async () => {
  await axios.delete("departamentos/"+departamentoSelected.id_Departamento)
  .then((response)=>{
    setDepartamentos(departamentos.filter(departamento =>departamentos.id_Departamento !== departamentoSelected.id_Departamento));
    OpenCloseModalDelete();
  })
}
//*hook efectos de la pagina
useEffect(() => {
  async function fetchData() {
    await axios
      .get("conac")
      .then((response) => {
        setDepartamentos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  fetchData();
}, []);
//*Funciones Modales
const selectDepartamento = (departamento,caso) => {
  setDepartamentoSelected(departamento);
  caso === "Editar" ? OpenCloseModalEdit():OpenCloseModalDelete()
}
const OpenCloseModalInsert = () => {
  setModalInsert(!modalInsert);
};
const OpenCloseModalEdit=()=>{
  setModalEdit(!modalEdit);
}
const OpenCloseModalDelete = () => {
  setModalDelete(!modalDelete);
}
  return (
    <>
      <div>
        <Navbar />
        <div className="menu">
          <h1>Departamentos</h1>
          <Button variant="primary">Nuevo Proyecto</Button>
        </div>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre del Departamento</th>
                <th>Ubicacion del departamento</th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Departamentos;
