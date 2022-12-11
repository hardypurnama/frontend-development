import React from "react";
import { Container, Row, Col, Nav, Card } from "react-bootstrap";
import Footer from "../../component/Footer";

const UserNotification = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-10">
          <Card>
            <Card.Body>
              <Card.Text className="desc">detail notif</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserNotification;
