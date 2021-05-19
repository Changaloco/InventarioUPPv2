import React from "react";
import Navbar from "../components/sidebar/Navbar";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { axios } from "../services/axios";

function Trimestres() {

  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [trimestres, setTrimestres] = useState([]);
  const [trimestreSelected, setTrimestreSelected] = useState({
    ejercicio: "",
    fechaInicio: "",
    fechaFin:"",
    numeroTrimestre: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrimestreSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //*funciones axios
  const insertModelo = async () => {
    await axios
      .post("trimestre", trimestreSelected)
      .then(
        (response) => setTrimestres(trimestres.concat(response.data)),
        OpenCloseModalInsert(),
        setTrimestreSelected(null)
      );
  };
  const editModelo = async () => {
    await axios
      .put("trimestre/" + trimestreSelected.id_Trimestre, trimestreSelected)
      .then((response) => {
        var dataNueva = trimestres;
        dataNueva.map((modelos) => {
          if (trimestreSelected.id_Trimestre === trimestres.id_Trimestre) {
            trimestres.ejercicio = trimestreSelected.ejercicio;
            trimestres.fechaInicio = trimestreSelected.fechaInicio;
            trimestres.fechaFin = trimestreSelected.fechaFin;
            trimestres.numeroTrimestre = trimestreSelected.numeroTrimestre;
          }
        });
        setTrimestres(dataNueva);
        setTrimestreSelected(null);
        OpenCloseModalEdit();
      });
  };
  const deleteModelo = async () => {
    await axios.delete("trimestre/" + trimestreSelected.id_Trimestre).then((response) => {
      setTrimestres(trimestres.filter((trimestres) => trimestres.id_Trimestre !== trimestreSelected.id_Trimestre));
      OpenCloseModalDelete();
    });
  };
  //*hook efectos de la pagina
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("trimestre")
        .then((response) => {
          setTrimestres(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);
  //*Funciones Modales
  const selectModelo = (trimestre, caso) => {
    setTrimestreSelected(trimestre);
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