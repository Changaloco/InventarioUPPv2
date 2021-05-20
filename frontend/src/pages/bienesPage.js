import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/sidebar/Navbar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { axios } from "../services/axios";

function Bienes() {
  const [modalInsert, setModalInsert] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [bienes, setBienes] = useState([]);
  const [conac, setConac] = useState([]);
  const [departamentos,setDepartamentos] = useState([]);
  const [depreciacion, setDepreciacion] = useState([]);
  const [modelo,setModelo] = useState([]);
  const [bienSelected, setBienSelected] = useState({
    nombreBien: "",
    descripcionBien: "",
    claveControl: "",
    numeroInventarioAnterior: "",
    numeroInventarioArmonizado: "",
    clasificacionAdicional: "",
    numeroSerie: "",
    fotografiaBien: "",
    fechaAlta: "",
    estatusBien: "",
    etiquetaBien: "",
    tratamientoAdministrativo: "",
    numeroResguardo: "",
    costoBien: "",
    costoContable: "",
    tipoBien: "",
    motivoBaja: "",
    fechaBaja: "",
    montoDepreciacion: "",
    mesesDepreciacion: "",
    id_clasificacionConac: "",
    id_Proyecto: "",
    id_Departamento: "",
    id_catalogoDepreciacion: "",
    id_Modelo: "",
    id_Factura: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBienSelected((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //*hook efectos de la pagina
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("bienes")
        .then((response) => {
          setBienes(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("conac")
        .then((response) => {
          setConac(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("departamentos")
        .then((response) => {
          setDepartamentos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);


  useEffect(() => {
    async function fetchData() {
      await axios
        .get("depreciacion")
        .then((response) => {
          setDepreciacion(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("modelos")
        .then((response) => {
          setModelo(response.data);
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
  const OpenCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };
  const OpenCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };
  return (
    <>
      <div>
        <Navbar />
        <div className="menu">
          <h1 style={{textAlign: 'center'}}>Bienes</h1>
          <div>
            <Button onClick={OpenCloseModalInsert} variant="primary">Agregar Usuario</Button>
          </div>
        </div>
        <Table striped bordered hover variant ="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del Bien</th>
              <th>Descripcion</th>
              <th>Numero Inventario Armonizado</th>
              <th>Numero Inventario Anterior</th>
              <th>Fecha de Alta</th>
              <th>Estatus del Bien</th>
              <th>Numero de Resguardo</th>
              <th>Tipo de bien</th>
              <th>Clave de control</th>
              <th>Funciones</th>
            </tr>
          </thead>
          <tbody>
            {bienes.map((bienes) => (
              <tr key={bienes.id_Bien}>
                <td>{bienes.nombreBien}</td>
                <td>{bienes.descripcionBien}</td>
                <td>{bienes.numeroInventarioArmonizado}</td>
                <td>{bienes.numeroInventarioAnterior}</td>
                <td>{bienes.fechaAlta}</td>
                <td>{bienes.estatusBien}</td>
                <td>{bienes.numeroResguardo}</td>
                <td>{bienes.tipoBien}</td>
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

      <Modal show={modalInsert} onHide={OpenCloseModalInsert}>
        <Modal.Header>
          <Modal.Title>Insertar Un Nuevo Departamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nombre del Bien</Form.Label>
              <Form.Control name="nombreBien" onChange={handleChange} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Descripcion del Bien</Form.Label>
              <Form.Control as="descripcionBien" rows={3} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Clave de Control</Form.Label>
              <Form.Control name="claveControl" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Numero de Inventario Armonizado</Form.Label>
              <Form.Control name="numeroInventarioArmonizado" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Numero de inventario Anterior</Form.Label>
              <Form.Control name="numeroInventarioAnterior" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Clasificacion Adicional</Form.Label>
              <Form.Control name="clasificacionAdicional" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Numero de Serie</Form.Label>
              <Form.Control name="numeroSerie" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fotografia del Bien</Form.Label>
              <Form.File name="image" onChange={handleChange}  />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha de Alta</Form.Label>
              <Form.Control type="date" name="fechaAlta" onChange={handleChange} />
            </Form.Group>
            <Form.Group >
              <Form.Label>Estatus del Bien</Form.Label>
              <Form.Control as="select" name="estatusBien" onChange={handleChange}>
                <option>Activo</option>
                <option>Inactivo</option>
              </Form.Control>
            </Form.Group>

            <Form.Group >
              <Form.Label>Tratamiento Administrativo</Form.Label>
              <Form.Control as="select" name="tratamientoAdministrativo" onChange={handleChange}>
                <option>Si</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Numero de Resguardo</Form.Label>
              <Form.Control name="numeroResguardo" onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Costo del Bien</Form.Label>
              <Form.Control name="costoBien" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Costo Contable</Form.Label>
              <Form.Control name="costoContable" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Tipo de Bien</Form.Label>
              <Form.Control name="tipoBien" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Motivo de Baja</Form.Label>
              <Form.Control name="motivoBaja" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Fecha de Baja</Form.Label>
              <Form.Control name="fechaBaja" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Meses de Depreciacion</Form.Label>
              <Form.Control name="mesesDepreciacion" onChange={handleChange} />
            </Form.Group>

            <Form.Group >
              <Form.Label>Clasificacion de Conac</Form.Label>
              <Form.Control as="select" name="id_ClasificacionConac" onChange={handleChange}>
                <option>1</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>

            <Form.Group >
              <Form.Label>Proyecto</Form.Label>
              <Form.Control as="select" name="id_Proyecto" onChange={handleChange}>
                <option>1</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>

            <Form.Group >
              <Form.Label>Departamento</Form.Label>
              <Form.Control as="select" name="id_Departamento" onChange={handleChange}>
              {departamentos.map((departamentos) => (
                <option value={departamentos.id_Departamento}>{departamentos.nombreDepartamento}</option>
              ))}
              </Form.Control>
            </Form.Group>

            <Form.Group >
              <Form.Label>Tratamiento Administrativo</Form.Label>
              <Form.Control as="select" name="id_catalogoDepreciacion" onChange={handleChange}>
                <option>1</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>

            <Form.Group >
              <Form.Label>Catalogo de Depreciacion</Form.Label>
              <Form.Control as="select" name="id_Modelo" onChange={handleChange}>
                <option>Si</option>
                <option>No</option>
              </Form.Control>
            </Form.Group>
            <Form.Group >
              <Form.Label>Modelo</Form.Label>
              <Form.Control as="select" name="puestoUsuario" onChange={handleChange}>
              {modelo.map((modelo) => (
                <option value={modelo.id_Modelo}>Marca: {modelo.marca} Submarca: {modelo.submarca} Modelo: {modelo.modelo}</option>
              ))}
              </Form.Control>
            </Form.Group>

    
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={OpenCloseModalInsert}>
            Guardar
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="secondary" onClick={OpenCloseModalInsert}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalDelete} onHide={()=>OpenCloseModalDelete()}>
        <Modal.Header>
          <Modal.Title>Eliminar Proveedor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Esta seguro de que desea eliminar este proveedor ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={OpenCloseModalDelete}>
            Confirmar
          </Button>
          <Button variant="secondary" onClick={()=>OpenCloseModalDelete()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Bienes;
