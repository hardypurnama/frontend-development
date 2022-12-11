import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Col, Row, Nav, Card, Button } from "react-bootstrap";
import NavbarComp from "../../component/NavbarComp";
import UserProfile from "./UserProfile";
import UserApply from "./UserApply";
import UserNotification from "./UserNotification";

const Users = (props) => {
  let { menu } = useParams();

  //   const handleUpdateUser = (data) => {

  //     setIdUser(data.id)
  //     setIsUpdate(true)
  //     Navigate("/Users/UserApply");

  //   };

  return (
    <>
      <NavbarComp />
      <Container>
        <Row>
          <Col sm={3}>
            <div className="side">
              <Nav defaultActiveKey="/home" className="flex-column">
                <Button
                  className="opsi d-grid gap-2 mt-3"
                  variant="outline-success"
                >
                  <Link className="mon" to="/Users/UserProfile">
                    User Profile
                  </Link>
                </Button>
                <Button
                  className="opsi d-grid gap-2 mt-3"
                  variant="outline-success"
                >
                  <Link className="mon" Link to="/Users/UserApply">
                    User Apply
                  </Link>
                </Button>
                <Button
                  className="opsi d-grid gap-2 mt-3"
                  variant="outline-success"
                >
                  <Link className="mon" Link to="/Users/UserNotification">
                    User Notification
                  </Link>
                </Button>
              </Nav>
            </div>
          </Col>

          <Col sm={9}>
            {menu === "UserProfile" && <UserProfile />}
            {menu === "UserApply" && <UserApply />}
            {menu === "UserNotification" && <UserNotification />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Users;
