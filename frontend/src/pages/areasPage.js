import React from "react";
import Navbar from "../components/sidebar/Navbar";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { axios } from "../services/axios";

function Areas() {
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [areas, setAreas] = useState([]);
  const [areaSelect, setAreaSelect] = useState({
    nombreArea: "",
    ubicacionArea: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAreaSelect((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  //*funciones axios
  const insertArea = async () => {
    await axios
      .post("areas", areaSelect)
      .then(
        (response) => setAreas(areas.concat(response.data)),
        OpenCloseModalInsert(),
        setAreaSelect(null)
      );
  };
  const editArea = async () => {
    await axios
      .put("areas/" + areaSelect.id_Area, areaSelect)
      .then((response) => {
        var dataNueva = areas;
        dataNueva.map((conac) => {
          if (areaSelect.id_Area === areas.id_Area) {
            areas.nombreArea = areaSelect.nombreArea;
            areas.ubicacionArea = areaSelect.ubicacionArea;
          }
        });
        setAreas(dataNueva);
        setAreaSelect(null);
        OpenCloseModalEdit();
      });
  };
  const deleteArea = async () => {
    await axios.delete("areas/" + areaSelect.id_Area).then((response) => {
      setAreas(Areas.filter((areas) => areas.id_Area !== areaSelect.id_Area));
      OpenCloseModalDelete();
    });
  };
  //*hook efectos de la pagina
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("areas")
        .then((response) => {
          setAreas(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);
  //*Funciones Modales
  const selectArea = (departamento, caso) => {
    setAreaSelect(departamento);
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
      <Navbar />
      <div className="menu">
        <h1>Areas</h1>
        <Button variant="primary">Nuevo Area</Button>
      </div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre del Area</th>
              <th>Ubicacion del Area</th>
            </tr>
          </thead>
          <tbody></tbody>
        </Table>
      </div>
    </div>
  );
}

export default Areas;
