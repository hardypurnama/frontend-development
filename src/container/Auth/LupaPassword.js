import React, { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./Auth.css";

function LupaPassword() {
  const [Reset, setReset] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setReset({ ...Reset, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    axios.post("https://backend-recruitment-production.up.railway.app/users/reset-password", Reset).then(
      (res) => {
        if (res.data.msg) {
          alert(res.data.msg);
          return navigate("/Login");
        }
      },
      (err) => {
        console.log("error: ".err);
      }
    );
  };

  return (
    <Container>
      <div className="Auth-form-container">
        <div className="Auth-lupaPassword">
          <div className="Auth-form-content">
            <h2 className="Auth-form-title">Lupa Password</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input Email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="d-grid gap-2 mt-3">
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LupaPassword;
