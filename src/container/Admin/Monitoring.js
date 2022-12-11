import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Col, Row, Nav, Card, Button } from "react-bootstrap";
import NavbarComp from "../../component/NavbarComp";
import AddLoker from "./AddLoker";
import MonitoringLoker from "./MonitoringLoker";
import MonitoringUser from "./MonitoringUser";
import UpdateStatusUser from "./UpdateStatusUser";
import "./Admin.css";

const Monitoring = (props) => {
  const [isUpdate, setIsUpdate] = useState(false);
  const [idLoker, setIdLoker] = useState();
  const [idKandidat, setIdKandidat] = useState();
  const Navigate = useNavigate();
  let { menu } = useParams();

  const handleUpdateLoker = (data) => {
    setIdLoker(data.id);
    setIsUpdate(true);
    Navigate("/Monitoring/AddLoker");
  };
  const handleUpdateUser = (data) => {
    console.log(data);
    setIdKandidat(data.id);
    console.log(idKandidat);
    Navigate("/Monitoring/UpdateStatusUser");
  };

  return (
    <>
      <NavbarComp />
      <Container>
        <Row>
          <Col sm={3}>
            <div className="side">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Button className="opsi d-grid gap-2 mt-3" variant="outline-primary">
                  <Link className="mon" to="/Monitoring/AddLoker">Input Loker</Link>
                </Button>
                <Button className="opsi d-grid gap-2 mt-3" variant="outline-primary">
                  <Link className="mon" Link to="/Monitoring/MonitoringUser">
                    Monitoring User
                  </Link>
                </Button>
                <Button className="opsi d-grid gap-2 mt-3" variant="outline-primary">
                  <Link className="mon" Link to="/Monitoring/MonitoringLoker">
                    Monitoring Loker
                  </Link>
                </Button>
              </Nav>
            </div>
          </Col>

          <Col sm={9}>
            {menu === "AddLoker" && (
              <AddLoker idLoker={idLoker} isUpdate={isUpdate} />
            )}
            {menu === "MonitoringLoker" && (
              <MonitoringLoker handleUpdateLoker={handleUpdateLoker} />
            )}
            {menu === "MonitoringUser" && (
              <MonitoringUser handleUpdateUser={handleUpdateUser} />
            )}
            {menu === "UpdateStatusUser" && (
              <UpdateStatusUser idKandidat={idKandidat} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Monitoring;
