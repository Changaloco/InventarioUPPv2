import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../components/sidebar/Navbar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
function Usuarios() {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [image,setImage] = useState([]);
  const [users, setUsuarios] = useState([]);
  const [departamentos,setDepartamentos] = useState([]);
  const [areas,setAreas] = useState([]);
  const [userSelected,setUserSelected] = useState({
    nombreUsuario:'',
    apellidoPUsuario:'', 
    apellidoMUsuario: '',
    matriculaUsuario:'',
    tipoUsuario:'',
    passwordUsuario:'',
    correoUsuario:'',
    perfilAcademicoUsuario:'',
    puestoUsuario:'',
    estatusLaboralUsuario:'',
    id_Departamento:'',
    id_Area:''
  });

  const handleChange=e=>{
    const{name,value}=e.target;
    setUserSelected(prevState=>({
      ...prevState,
      [name]:value
    }))
    
    console.log(userSelected);
  }

  const uploadImage=e=>{
    setImage(e.target.files[0]);
    console.log(image)
  }

  const OpenCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };
  const OpenCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const selectUsuario = (usuario, caso) => {
    setUserSelected(usuario);
    caso === "Editar" ? OpenCloseModalEdit() : OpenCloseModalDelete();
  };

  const insertUser=async()=>{
    let formData = new FormData();
    formData.append('image',image);
    formData.append('nombreUsuario',userSelected.nombreUsuario);
    formData.append('apellidoPUsuario',userSelected.apellidoPUsuario);
    formData.append('apellidoMUsuario' , userSelected.apellidoMUsuario);
    formData.append('matriculaUsuario', userSelected.matriculaUsuario);
    formData.append('tipoUsuario' , userSelected.tipoUsuario);
    formData.append('passwordUsuario' , userSelected.passwordUsuario);
    formData.append('correoUsuario' , userSelected.correoUsuario);
    formData.append('perfilAcademicoUsuario' , userSelected.perfilAcademicoUsuario);
    formData.append('puestoUsuario' , userSelected.puestoUsuario);
    formData.append('estatusLaboralUsuario', userSelected.estatusLaboralUsuario);
    formData.append('id_Departamento' , userSelected.id_Departamento);
    formData.append('id_Area' , userSelected.id_Area);
    console.log(formData);
    await axios.post('http://localhost:4000/api/usuarios/register',formData)
    .then(response=>
      setUsuarios(users.concat(response.data)), 
      OpenCloseModalInsert()
      )
  }

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("http://localhost:4000/api/usuarios")
        .then((response) => {
          setUsuarios(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    fetchData();
  }, []);
  useEffect(() => {

    async function fetchDepartamentos(){
      await axios
      .get("http://localhost:4000/api/departamentos")
      .then((response)=>{
        setDepartamentos(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }
    fetchDepartamentos();
  },[])
  useEffect(() => {

    async function fetchAreas(){
      await axios
      .get("http://localhost:4000/api/areas")
      .then((response)=>{
        setAreas(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
    }
    fetchAreas();
  },[])

  const OpenCloseModalInsert = () => {
    setModalInsert(!modalInsert);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="menu">
          <h1>Usuarios</h1>
          <Button variant="primary" onClick={OpenCloseModalInsert}>
            Agregar Usuario
          </Button>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Apellido Paterno</th>
                <th>Apellido Materno</th>
                <th>Matricula</th>
                <th>Puesto</th>
                <th>Perfil Academico</th>
                <th>Correo Electronico</th>
                <th>Departamento</th>
                <th>Operaciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((usuario) => (
                <tr key={usuario.id_Usuario}>
                  <td>{usuario.id_Usuario}</td>
                  <td>{usuario.nombreUsuario}</td>
                  <td>{usuario.apellidoPUsuario}</td>
                  <td>{usuario.apellidoMUsuario}</td>
                  <td>{usuario.matriculaUsuario}</td>
                  <td>{usuario.puestoUsuario}</td>
                  <td>{usuario.perfilAcademicoUsuario}</td>
                  <td>{usuario.correoUsuario}</td>
                  <td>{usuario.id_Departamento}</td>
                  <td>
                    <Button onClick={()=>selectUsuario()} variant="success">Editar</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={()=>selectUsuario()}  variant="danger">Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>


      <Modal show={modalInsert} onHide={OpenCloseModalInsert}>
        <Modal.Header>
          <Modal.Title>Insertar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group >
              <Form.Label>Nombre</Form.Label>
              <Form.Control name="nombreUsuario" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Apellido Paterno </Form.Label>
              <Form.Control name="apellidoPUsuario" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Apellido Materno</Form.Label>
              <Form.Control name="apellidoMUsuario" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Matricula Universidad</Form.Label>
              <Form.Control name="matriculaUsuario" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" name="correoUsuario" onChange={handleChange} />
              <Form.Text className="text-muted">
                Usa tu correo de la universidad!
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Password" name="passwordUsuario" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Tipo de Usuario</Form.Label>
              <Form.Control as="select" name="tipoUsuario" onChange={handleChange}>
                <option>ADMINISTRADOR</option>
                <option>INVITADO</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Perfil Academico</Form.Label>
              <Form.Control as="select" name="perfilAcademicoUsuario" onChange={handleChange}>
                <option>Doctorado en Ciencias en Biotecnología</option>
                <option>Licenciatura en Ciencias de la Comunicación</option>
                <option>Licenciatura en Ciencias</option>
                <option>Ingenieria en Sistemas Computacionales</option>
                <option>Ingenieria en Software</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Puesto de Usuario</Form.Label>
              <Form.Control as="select" name="puestoUsuario" onChange={handleChange}>
                <option>PROFESOR INVESTIGADOR TITULAR A</option>
                <option>PROFESOR INVESTIGADOR TITULAR B</option>
                <option>DIRECTOR DE ÁREA</option>
                <option>DIRECTOR DE CARRERA</option>
                <option>ADMINISTRATIVO</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Fotografia</Form.Label>
              <Form.File name="image" onChange={uploadImage}  />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label >Estatus Laboral</Form.Label>
              <Form.Control name="estatusLaboralUsuario" onChange={handleChange} as="select">
                <option>Activo</option>
                <option>Inactivo</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label >Departamento</Form.Label>
              <Form.Control name="id_Departamento" onChange={handleChange} as="select">
              {departamentos.map((departamentos) => (
                <option value={departamentos.id_Departamento}>{departamentos.nombreDepartamento}</option>
              ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Area</Form.Label>
                <Form.Control name="id_Area" onChange={handleChange} as="select">
                {areas.map((areas) => (
                <option value={areas.id_Area}>{areas.nombreArea}</option>
              ))}
                </Form.Control>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={insertUser}>Save Changes</Button>
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
          <Button variant="danger" onClick={()=>OpenCloseModalDelete()}>
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

export default Usuarios;
