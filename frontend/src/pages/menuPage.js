import React from "react";
import Navbar from "../components/sidebar/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Menu() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <h1 style={{ textAlign: "center" }}>Menu</h1>
        </div>
        <div>
          <Card>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Menu;
